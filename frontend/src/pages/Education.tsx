import React from "react";
import "../styles/Experience_Education.css";
import educationData from "../../public/utils/Education.json";

interface Education {
  level: String;
  school: String;
  startYear: String;
  endDate: String;
  achievements: String[];
  imageSrc: String;
}

function Education() {
  return (
    <section id="education" className="scroll-mt-[150px] xl:scroll-mt-[220px]">
      <div className="wrapper flex flex-col gap-10">
        {/* Section Heading */}
        <div
          className="xl:mb-5"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="500"
        >
          <h3 className="bio">HS, SHS, College</h3>
          <h1 className="heading flex justify-center">My Education</h1>
        </div>

        {/* Education Cards Container */}
        <div
          className="card-container"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          {educationData.map((educ: Education, index: number) => (
            <div key={index} className="single-card box-shadow align-middle justify-center">
              <div className="content-wrapper">
                {/* Image Wrapper */}
                <div className="image-wrapper mt-2">
                  <img src={educ.imageSrc} alt="pic" className="image" />
                </div>

                {/* Info Wrapper */}
                <div className="info-wrapper">
                  <span className="span">{educ.level} || {educ.startYear}–{educ.endDate}</span>

                  <h3 className="h3">{educ.school}</h3>

                  <div>
                    <p className="text-[16px] xl:text-xl">{educ.gpa}</p>
                    {educ.achievements.map((achieve, i) => (
                    <p key={i} className="text-[14px] xl:text-[16px] text-(--color-body-2)">
                      - {achieve}
                    </p>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Education;
