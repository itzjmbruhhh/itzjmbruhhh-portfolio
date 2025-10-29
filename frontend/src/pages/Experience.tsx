import React from "react";
import "../styles/Experience_Education.css";
import Image from "../assets/images/home.jpg";

function Experience() {
  return (
    <section id="experience" className="scroll-mt-[150px] xl:scroll-mt-[220px]">
      <div className="wrapper flex flex-col gap-10">
        {/* Section Heading */}
        <div className="xl:mb-5" data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-duration="500">
          <h3 className="bio">OVER 3 YEARS OF EXPERIENCE</h3>
          <h1 className="heading flex justify-center">My Experience</h1>
        </div>

        {/* Experience Cards Container */}
        <div className="card-container" data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-duration="500" data-aos-delay="100">

          {/* Single Experience Card */}
          <div className="single-card-exp box-shadow">
            <div className="content-wrapper">
              

              {/* Info Wrapper */}
              <div className="info-wrapper-exp">
                <i className="las la-desktop text-(--color-primary) text-6xl"></i>

                <h3 className="h3-exp">Frontend Development</h3>

                <div>
                  <p className="text-[16px] xl:text-xl">Lorem ipsum dolor.</p>
                  <p className="text-[14px] xl:text-[18px] text-(--color-body-2)">
                    Lorem ipsum dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End of Single Experience Card */}

          {/* Single Experience Card */}
          <div className="single-card-exp box-shadow">
            <div className="content-wrapper">
              

              {/* Info Wrapper */}
              <div className="info-wrapper-exp">
                <i className="las la-code text-(--color-primary) text-6xl"></i>

                <h3 className="h3-exp">Backend Development</h3>

                <div>
                  <p className="text-[16px] xl:text-xl">Lorem ipsum dolor.</p>
                  <p className="text-[14px] xl:text-[18px] text-(--color-body-2)">
                    Lorem ipsum dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End of Single Experience Card */}

          {/* Single Experience Card */}
          <div className="single-card-exp box-shadow">
            <div className="content-wrapper">
              

              {/* Info Wrapper */}
              <div className="info-wrapper-exp">
                <i className="las la-robot text-(--color-primary) text-6xl"></i>

                <h3 className="h3-exp">Machine Learning</h3>

                <div>
                  <p className="text-[16px] xl:text-xl">Lorem ipsum dolor.</p>
                  <p className="text-[14px] xl:text-[18px] text-(--color-body-2)">
                    Lorem ipsum dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End of Single Experience Card */}

        </div>
      </div>
    </section>
  );
}

export default Experience;
