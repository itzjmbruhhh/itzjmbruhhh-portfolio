import "../styles/Experience_Education.css";
import expData from "../assets/utils/Experience.json";

interface Experience {
  icon: string;
  title: string;
  bio: string;
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-[150px] xl:scroll-mt-[220px]">
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

        {/* Experience Cards Container */}
        <div
          className="card-container"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          
          {/* Single Container */}
          {expData.map((exp: Experience, index: number) => (
            <div key={index} className="single-card-exp box-shadow">
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
      </div>
    </section>
  );
}

export default Experience;
