import "../styles/Experience_Education.css";
import expData from "../assets/utils/Experience.json";
import worksData from "../assets/utils/Works.json";
import GitHubStats from "../components/GitHubStats";

interface Experience {
  icon: string;
  title: string;
  bio: string;
}

interface Work {
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  description: string | string[];
  stack: string[];
  current?: boolean;
  link?: string;
}

function Experience() {
  const statsDelay = expData.length * 120 + 200;

  return (
      <section id="experience" className="scroll-mt-[150px] xl:scroll-mt-[180px]">
        <div className="wrapper flex flex-col gap-10">

          {/* ─── Section Heading ─── */}
          <div
              className="xl:mb-5"
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
              data-aos-duration="500"
          >
            <h3 className="bio">What I do?</h3>
            <h1 className="heading flex justify-center">My Experience</h1>
          </div>

          {/* ─── Bento Grid: Experience Cards ─── */}
          <div className="bento-grid">
            {expData.map((exp: Experience, index: number) => (
                <div
                    key={index}
                    className="bento-card single-card-exp"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay={String(index * 120)}
                >
                  <div className="bento-card-inner info-wrapper-exp">
                    <i className={`${exp.icon} text-(--color-primary) text-5xl xl:text-6xl`} />
                    <h3 className="h3-exp mt-3">{exp.title}</h3>
                    <p className="text-[14px] xl:text-[17px] text-(--color-body-2) text-justify xl:mt-2">
                      {exp.bio}
                    </p>
                  </div>
                </div>
            ))}
          </div>

          {/* ─── GitHub Stats — standalone grid ─── */}
          <div
              className="github-stats-section"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={String(statsDelay)}
          >
            <h3 className="text-xl xl:text-2xl text-center font-medium text-(--color-primary) mb-4">
              GitHub Stats
            </h3>
            <GitHubStats />
          </div>

          {/* ─── Work History Section ─── */}
          <div
              className="xl:mt-4"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
          >
            <div className="xl:mb-5" data-aos="fade-up" data-aos-duration="500">
              <h3 className="bio">Where I've worked?</h3>
              <h1 className="heading flex justify-center">Companies</h1>
            </div>

            <div className="works-list">
              {worksData.map((work: Work, index: number) => (
                  <div
                      key={index}
                      className="work-item"
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay={String(index * 100)}
                  >
                    {/* Left: period + type */}
                    <div className="work-meta">
                      <span className="work-period">{work.period}</span>
                      <span className={`work-type-badge work-type-badge--${work.type.toLowerCase().replace(/\s/g, "-")}`}>
                    {work.type}
                  </span>
                    </div>

                    {/* Right: card body */}
                    <div className="work-card">
                      {work.current && (
                          <span className="work-current-badge">Current</span>
                      )}
                      <div className="work-header">
                        <h3 className="work-role">{work.role}</h3>
                        {work.link ? (
                            <a
                                href={work.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="work-company work-company--link"
                            >
                              @ {work.company}
                            </a>
                        ) : (
                            <span className="work-company">@ {work.company}</span>
                        )}
                      </div>
                      <div className="work-location">
                        <i className="bx bx-map-pin text-sm" />
                        <span>{work.location}</span>
                      </div>
                      {Array.isArray(work.description) ? (
                        <ul className="work-description list-disc pl-5 space-y-1">
                          {work.description.map((item, i) => (
                            <li
                              key={i}
                              dangerouslySetInnerHTML={{ __html: item }}
                            />
                          ))}
                        </ul>
                      ) : (
                        <p className="work-description">{work.description}</p>
                      )}
                      <div className="works-tags">
                        {work.stack.map((tech: string, i: number) => (
                            <span key={i} className="span">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>

        </div>
      </section>
  );
}

export default Experience;