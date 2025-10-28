import React from "react";

function HomeLeft() {
  return (
    <div className="home-left info-container hover">
      <div className="info-wrapper">
        <div className="info-bio m-0.5 box-shadow">

        {/* Info Header Start */}

          <div className="info-header pb-0 p-4">
            <i className="lar la-user text-2xl border-9 p-1 rounded-full border-(--color-primary-opaque) bg-(--color-primary) text-white"></i>
            <h1 className="mt-4 ml-1 font-extrabold text-(--color-secondary) text-3xl md:text-6xl xl:text-6xl">
              Hi, I'm <span className="text-(--color-primary)">JM Reyes</span>
            </h1>
            <p className="info-text">
              I'm a student developer. <br /> With experience using
              React-Django, Tensorflow and Pytorch. Reach out if you'd like to
              learn more!
            </p>
          </div>

          {/* Info Header End */}

          <div className="info-footer pt-0 p-4">
            <ul>
              <li className="info-text mt-2 flex items-center gap-2">
                <i className="lar la-sticky-note text-3xl text-(--color-primary)"></i>
                <span>Web & AI Developer</span>
              </li>

              <li className="info-text mt-2 flex items-center gap-2">
                <i className="lar la-envelope text-3xl text-(--color-primary)"></i>
                <span>jama10292001@gmail.com</span>
              </li>

              <li className="info-text mt-2 flex items-center gap-2">
                <i className="las la-map-marker text-3xl text-(--color-primary)"></i>
                <span>Lipa City, Batangas</span>
              </li>

            </ul>
          </div>
        </div>

        <div className="info-cv m-0.5 mt-10 box-shadow">
          <div className="ml-5 mr-5 mt-2">
            <p className="text-[12px] md:text-[16px] xl:text-[16px] text-(--color-body-3) font-normal ">
              Download my curriculum vitae:
            </p>
            <div className="flex xl:space-x-5 space-y-5 py-5 flex-col xl:flex-row xl:space-y-0 md:space-y-0 md:space-x-5 md:flex-row">
              <button className="box-shadow hover cv-button font-medium">
                DOWNLOAD CV
              </button>
              <button className="box-shadow hover cv-button font-medium">CONTACT ME</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLeft;
