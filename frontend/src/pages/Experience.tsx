import React from "react";
import "../styles/Experience.css";
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
        <div className="flex flex-col gap-5 xl:flex-row xl:justify-center xl:gap-8">
          {/* Single Experience Card */}
          <div className="box-shadow xl:w-[33%] flex flex-col gap-4 max-w-[450px] xl:max-w-[33%] mx-auto xl:mx-0">
            <div className="mt-2 mx-4 gap-4 flex flex-col xl:flex-row xl:items-start">
              {/* Image Wrapper */}
              <div className="relative overflow-hidden rounded-[5px] shrink-0 w-full md:w-[400px] xl:w-[35%] h-auto xl:h-[120px]">
                <img
                  src={Image}
                  alt="pic"
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>

              {/* Info Wrapper */}
              <div className="info-wrapper flex flex-col gap-2 mt-4 xl:mt-0">
                <span className="border py-0.5 px-1.5 rounded-3xl text-[12px] border-(--color-body) bg-(--color-body) text-(--color-gray) w-fit">
                  2022–present
                </span>

                <h3 className="text-[18px] xl:text-2xl font-medium xl:font-semibold">
                  Frontend Development
                </h3>

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
          <div className="box-shadow xl:w-[33%] flex flex-col gap-4 max-w-[450px] xl:max-w-[33%] mx-auto xl:mx-0">
            <div className="mt-2 mx-4 gap-4 flex flex-col xl:flex-row xl:items-start">
              {/* Image Wrapper */}
              <div className="relative overflow-hidden rounded-[5px] shrink-0 w-full md:w-[400px] xl:w-[35%] h-auto xl:h-[120px]">
                <img
                  src={Image}
                  alt="pic"
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>

              {/* Info Wrapper */}
              <div className="info-wrapper flex flex-col gap-2 mt-4 xl:mt-0">
                <span className="border py-0.5 px-1.5 rounded-3xl text-[12px] border-(--color-body) bg-(--color-body) text-(--color-gray) w-fit">
                  2022–present
                </span>

                <h3 className="text-[18px] xl:text-2xl font-medium xl:font-semibold">
                  Frontend Development
                </h3>

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
          <div className="box-shadow xl:w-[33%] flex flex-col gap-4 max-w-[450px] xl:max-w-[33%] mx-auto xl:mx-0">
            <div className="mt-2 mx-4 gap-4 flex flex-col xl:flex-row xl:items-start">
              {/* Image Wrapper */}
              <div className="relative overflow-hidden rounded-[5px] shrink-0 w-full md:w-[400px] xl:w-[35%] h-auto xl:h-[120px]">
                <img
                  src={Image}
                  alt="pic"
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>

              {/* Info Wrapper */}
              <div className="info-wrapper flex flex-col gap-2 mt-4 xl:mt-0">
                <span className="border py-0.5 px-1.5 rounded-3xl text-[12px] border-(--color-body) bg-(--color-body) text-(--color-gray) w-fit">
                  2022–present
                </span>

                <h3 className="text-[18px] xl:text-2xl font-medium xl:font-semibold">
                  Frontend Development
                </h3>

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
