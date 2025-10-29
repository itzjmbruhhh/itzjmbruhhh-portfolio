import React from "react";
import "../styles/Experience_Education.css";
import Image from "../assets/images/home.jpg";

function Education() {
  return (
     <section id="education" className="scroll-mt-[220px]">
      <div className="wrapper flex flex-col gap-10">
        {/* Section Heading */}
        <div className="xl:mb-5" data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-duration="500">
          <h3 className="bio">HS, SHS, College</h3>
          <h1 className="heading flex justify-center">My Education</h1>
        </div>

        {/* Education Cards Container */}
        <div className="card-container" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="500" data-aos-delay="100">

          {/* Single Education Card */}
          <div className="single-card box-shadow">
            <div className="content-wrapper">
              {/* Image Wrapper */}
              <div className="image-wrapper">
                <img src={Image} alt="pic" className="image" />
              </div>

              {/* Info Wrapper */}
              <div className="info-wrapper">
                <span className="span">2014–2018</span>

                <h3 className="h3">Canossa Academy</h3>

                <div>
                  <p className="text-[16px] xl:text-xl">Lorem ipsum dolor.</p>
                  <p className="text-[14px] xl:text-[18px] text-(--color-body-2)">
                    Lorem ipsum dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End of Single Education Card */}

          {/* Single Education Card */}
          <div className="single-card box-shadow">
            <div className="content-wrapper">
              {/* Image Wrapper */}
              <div className="image-wrapper">
                <img src={Image} alt="pic" className="image" />
              </div>

              {/* Info Wrapper */}
              <div className="info-wrapper">
                <span className="span">2014–2018</span>

                <h3 className="h3">Canossa Academy</h3>

                <div>
                  <p className="text-[16px] xl:text-xl">Lorem ipsum dolor.</p>
                  <p className="text-[14px] xl:text-[18px] text-(--color-body-2)">
                    Lorem ipsum dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End of Single Education Card */}

          {/* Single Education Card */}
          <div className="single-card box-shadow">
            <div className="content-wrapper">
              {/* Image Wrapper */}
              <div className="image-wrapper">
                <img src={Image} alt="pic" className="image" />
              </div>

              {/* Info Wrapper */}
              <div className="info-wrapper">
                <span className="span">2014–2018</span>

                <h3 className="h3">Canossa Academy</h3>

                <div>
                  <p className="text-[16px] xl:text-xl">Lorem ipsum dolor.</p>
                  <p className="text-[14px] xl:text-[18px] text-(--color-body-2)">
                    Lorem ipsum dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End of Single Education Card */}

        </div>
      </div>
    </section>
  )
}

export default Education