import { useEffect, useState } from "react";

type GhUser = {
  login: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  html_url: string;
};

function formatNumber(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
}

export default function GitHubStats() {
  const username = "itzjmbruhhh";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<GhUser | null>(null);
  const [commitCount, setCommitCount] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
        ]);

        if (!userRes.ok) throw new Error("Failed to load GitHub user");
        if (!reposRes.ok) throw new Error("Failed to load GitHub repos");

        const userJson = await userRes.json();
        const reposJson: { name: string }[] = await reposRes.json();

        if (!mounted) return;

        setUser(userJson as GhUser);

        const token = (import.meta as any)?.env?.VITE_GITHUB_TOKEN || null;

        if (token) {
          try {
            const gql = {
              query: `query($login:String!){ user(login:$login){ contributionsCollection{ totalCommitContributions } } }`,
              variables: { login: username },
            };

            const gRes = await fetch("https://api.github.com/graphql", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(gql),
            });

            if (gRes.ok) {
              const gJson = await gRes.json();
              const total =
                  gJson?.data?.user?.contributionsCollection
                      ?.totalCommitContributions;
              if (typeof total === "number") {
                if (mounted) setCommitCount(total);
                return;
              }
            }
          } catch (e) {
            // ignore and fallback
          }
        }

        const commitPromises = reposJson.map(async (r) => {
          try {
            const cRes = await fetch(
                `https://api.github.com/repos/${username}/${r.name}/contributors?per_page=100`
            );
            if (!cRes.ok) return 0;
            const cJson = await cRes.json();
            const me = (cJson as any[]).find((c) => c.login === username);
            return me?.contributions || 0;
          } catch (e) {
            return 0;
          }
        });

        const settled = await Promise.allSettled(commitPromises);
        const commits = settled.reduce((sum, res) => {
          if (res.status === "fulfilled") return sum + (res.value as number);
          return sum;
        }, 0);

        if (!mounted) return;
        setCommitCount(commits);
      } catch (err: any) {
        setError(err?.message || "Unknown error");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
        <div className="github-stats">
          <div className="box-shadow github-stat">Loading GitHub...</div>
        </div>
    );
  }

  if (error) {
    return (
        <div className="github-stats">
          <div className="box-shadow github-stat">Error: {error}</div>
        </div>
    );
  }

  const statItems = [
    {
      label: "Repos",
      value: formatNumber(user?.public_repos || 0),
      icon: "bx bx-book-bookmark",
    },
    {
      label: "Commits",
      value: commitCount !== null ? formatNumber(commitCount) : "—",
      icon: "bx bx-git-commit",
    },
    {
      label: "Followers",
      value: formatNumber(user?.followers || 0),
      icon: "bx bx-user-check",
    },
    {
      label: "Following",
      value: formatNumber(user?.following || 0),
      icon: "bx bx-user-plus",
    },
  ];

  return (
      <div className="github-stats">
        {/* Profile card */}
        <a
            href={user?.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="box-shadow github-stat no-underline"
            style={{ minWidth: 180 }}
        >
          <img
              src={user?.avatar_url}
              alt={user?.login}
              className="rounded-full w-12 h-12 mb-2"
          />
          <div className="font-bold text-[15px]">@{user?.login}</div>
          <div className="text-[12px] text-(--color-body-2) flex items-center gap-1 mt-0.5">
            <i className="bx bxl-github text-base" /> View profile
          </div>
        </a>

        {/* Stat tiles */}
        {statItems.map((s) => (
            <div key={s.label} className="box-shadow github-stat">
              <i className={`${s.icon} text-(--color-primary) text-2xl mb-1`} />
              <div className="font-bold text-xl">{s.value}</div>
              <div className="text-[13px] text-(--color-body-2)">{s.label}</div>
            </div>
        ))}
      </div>
  );
}