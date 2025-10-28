import React from "react";
import "../styles/Experience_Education.css";
import Image from "../assets/images/home.jpg";

function Experience() {
  return (
    <section id="experience" className="scroll-mt-[150px] py-10">
      <div className="wrapper flex flex-col gap-10">
        {/* Section Heading */}
        <div className="xl:mb-5">
          <h3 className="bio">OVER 3 YEARS OF EXPERIENCE</h3>
          <h1 className="heading flex justify-center">My Experience</h1>
        </div>

        {/* Experience Cards Container */}
        <div className="card-container">

          {/* Single Experience Card */}
          <div className="single-card box-shadow">
            <div className="content-wrapper">
              {/* Image Wrapper */}
              <div className="image-wrapper">
                <img src={Image} alt="pic" className="image" />
              </div>

              {/* Info Wrapper */}
              <div className="info-wrapper">
                <span>2022–present</span>

                <h3 className="">Frontend Development</h3>

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
          <div className="single-card box-shadow">
            <div className="content-wrapper">
              {/* Image Wrapper */}
              <div className="image-wrapper">
                <img src={Image} alt="pic" className="image" />
              </div>

              {/* Info Wrapper */}
              <div className="info-wrapper">
                <span>2022–present</span>

                <h3 className="">Frontend Development</h3>

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
          <div className="single-card box-shadow">
            <div className="content-wrapper">
              {/* Image Wrapper */}
              <div className="image-wrapper">
                <img src={Image} alt="pic" className="image" />
              </div>

              {/* Info Wrapper */}
              <div className="info-wrapper">
                <span>2022–present</span>

                <h3 className="">Frontend Development</h3>

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
