import { useEffect, useState } from "react";

type GhUser = {
  login: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  html_url: string;
};

type Repo = {
  name: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
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
  const [repos, setRepos] = useState<Repo[]>([]);
  const [commitCount, setCommitCount] = useState<number | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        // 1) fetch user and repos
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
        ]);

        if (!userRes.ok) throw new Error("Failed to load GitHub user");
        if (!reposRes.ok) throw new Error("Failed to load GitHub repos");

        const userJson = await userRes.json();
        const reposJson: Repo[] = await reposRes.json();

        if (!mounted) return;

        setUser(userJson as GhUser);
        setRepos(reposJson as Repo[]);
        // 2) Try to get overall commit contributions since account creation via GitHub GraphQL
        //    This requires a token set as VITE_GITHUB_TOKEN. If token is missing or the
        //    request fails, fall back to summing per-repo contributor counts (best-effort).
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
            // if GraphQL didn't return the value, fall through to contributors-sum fallback
          } catch (e) {
            // ignore and fallback
          }
        }

        // Fallback: compute commits by querying contributors per repo (sums contributions for this user)
        // Note: this uses the unauthenticated API and may be rate-limited. We gracefully skip failures.
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

  // placeholder: if needed later, totalStars can be computed from repos

  return (
    <div className="github-stats" data-aos="fade-up" data-aos-duration="600">
      {loading ? (
        <div className="box-shadow github-stat p-4">Loading GitHub...</div>
      ) : error ? (
        <div className="box-shadow github-stat p-4">Error: {error}</div>
      ) : (
        <>
          <a
            href={user?.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="box-shadow github-stat p-4 no-underline"
          >
            <div className="flex items-center gap-3 justify-center">
              <img
                src={user?.avatar_url}
                alt={user?.login}
                className="rounded-full w-12 h-12"
              />
              <div>
                <div className="text-[16px] font-bold">@{user?.login}</div>
                <div className="text-[13px] text-(--color-body-2)">
                  View profile
                </div>
              </div>
            </div>
          </a>

          <div className="box-shadow github-stat p-4">
            <div className="font-bold text-xl">Repos</div>
            <div className="text-(--color-body-2) text-lg">
              {formatNumber(user?.public_repos || 0)}
            </div>
          </div>

          <div className="box-shadow github-stat p-4">
            <div className="font-bold text-xl">Overall commits</div>
            <div className="text-(--color-body-2) text-lg">
              {commitCount !== null ? formatNumber(commitCount) : "—"}
            </div>
          </div>

          <div className="box-shadow github-stat p-4">
            <div className="font-bold text-xl">Followers</div>
            <div className="text-(--color-body-2) text-lg">
              {formatNumber(user?.followers || 0)}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
