import "../styles/Experience_Education.css";
import expData from "../assets/utils/Experience.json";
import GitHubStats from "../components/GitHubStats";

interface Experience {
  icon: string;
  title: string;
  bio: string;
}

function Experience() {
  const statsDelay = expData.length * 120 + 200; // stagger after cards
  return (
    <section id="experience" className="scroll-mt-[150px] xl:scroll-mt-[180px]">
      <div className="wrapper flex flex-col gap-10">
        {/* Section Heading */}
        <div
          className="xl:mb-5"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="500"
        >
          <h3 className="bio">What I do?</h3>
          <h1 className="heading flex justify-center">My Experience</h1>
        </div>

        {/* Experience Cards Container (cards animate sequentially) */}
        <div
          className="card-container"
          data-aos-anchor-placement="center-center"
        >
          {/* Single Container */}
          {expData.map((exp: Experience, index: number) => (
            <div
              key={index}
              className="single-card-exp box-shadow"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={String(index * 120)}
            >
              <div className="content-wrapper">
                <div className="info-wrapper-exp">
                  <i
                    className={`${exp.icon} text-(--color-primary) text-6xl`}
                  ></i>

                  <h3 className="h3-exp">{exp.title}</h3>

                  <div>
                    <p className="text-[14px] xl:text-[18px] text-(--color-body-2) text-justify xl:mt-2">
                      {exp.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Single Container End */}
        </div>
        {/* GitHub Metrics - placed below the cards as requested */}
        <div className="xl:mt-6">
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay={String(statsDelay)}
            className="flex justify-center mb-4"
          >
            <h3 className="text-2xl font-medium text-(--color-primary)">GitHub Stats</h3>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay={String(statsDelay)}
          >
            <GitHubStats />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
