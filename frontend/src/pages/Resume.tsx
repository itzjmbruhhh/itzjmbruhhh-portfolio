import React from "react";
import "../styles/Resume.css";

function Resume() {
  return (
    <section>
      <div className="wrapper flex flex-col gap-10" id="resume">
        {/* Section Heading */}
        <div
          className="xl:mb-5"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="500"
        >
          <h3 className="bio">A List of my Experiences</h3>
          <h1 className="heading flex justify-center">My Resume</h1>
        </div>

        <div className="resume-container">
          <div>
            {/* Nav Links */}
            <ul
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1000"
              data-aos-once="true"
              className="box-shadow-res flex justify-center align-middle flex-col xl:flex-row space-x-0 m-0 list-none"
              id="myTabs"
              role="tablist"
            >
              <li className="nav-item-res">
                <a
                  className="nav-link-res"
                  id="education-tab"
                  data-bs-toggle="tab"
                  href="#education-tab"
                  role="tab"
                  aria-controls="education"
                  aria-selected="false"
                >
                  Education
                </a>
              </li>
              <li className="nav-item-res">
                <a
                  className="nav-link-res"
                  id="professional-tab"
                  data-bs-toggle="tab"
                  href="#professional-tab"
                  role="tab"
                  aria-controls="professional"
                  aria-selected="false"
                >
                  Professional Skills
                </a>
              </li>
              <li className="nav-item-res active">
                <a
                  className="nav-link-res"
                  id="experience-tab"
                  data-bs-toggle="tab"
                  href="#experience-tab"
                  role="tab"
                  aria-controls="experience"
                  aria-selected="true"
                >
                  Experience
                </a>
              </li>
            </ul>

            <div className="className" id="education-tab">
              1
            </div>
            <div className="className" id="professional-tab">
              2
            </div>
            <div className="className" id="certifications-tab">
              3
            </div>
          </div>
        </div>
      </div>
    </section>

    //  <div className="relative border-l-2 border-gray-700 ml-6">
    //    <div className="group relative mb-8 pl-6">
    //      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gray-600 border-2 border-gray-800 transition-all duration-300 group-hover:bg-pink-500 group-hover:scale-110"></div>

    //      <h3 className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">
    //        Root Node
    //      </h3>
    //      <p className="text-gray-400">This is the root of the tree.</p>
    //    </div>

    //    <div className="group relative mb-8 pl-6">
    //      <div className="absolute -left-[9px] top-8 w-4 h-4 rounded-full bg-gray-600 border-2 border-gray-800 transition-all duration-300 group-hover:bg-pink-500 group-hover:scale-110"></div>
    //      <div className="border w-[100px] h-[100px]">content</div>
    //    </div>

    //    <div className="group relative mb-8 pl-6">
    //      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gray-600 border-2 border-gray-800 transition-all duration-300 group-hover:bg-pink-500 group-hover:scale-110"></div>
    //      <h3 className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">
    //        Leaf Node
    //      </h3>
    //      <p className="text-gray-400">End of the branch.</p>
    //    </div>
    //  </div>
  );
}

export default Resume;
