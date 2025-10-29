import React from "react";
import { useState } from "react";
import "../styles/Resume.css";
import Activities from "./Activities";
import Skills from "./Skills";
import Certifications from "./Certifications";

function Resume() {
  const [activeTab, setActiveTab] = useState("activities");
  return (
    <section id="resume" className="scroll-mt-[180px]">
      <div className="wrapper flex flex-col gap-10">
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

        <div className="resume-container flex flex-col items-center">
          {/* Tabs */}
          <ul
            className="w-[80%] box-shadow-res flex justify-center items-center flex-col xl:flex-row gap-0 m-0 p-0 list-none"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-once="true"
          >
            {["activities", "professional skills", "certifications"].map(
              (tab) => (
                <li
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`nav-item-res ${
                    activeTab === tab ? "active" : "text-(--color-body-2)"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")}
                </li>
              )
            )}
          </ul>

          {/* Tab Content */}
          <div
            className="mt-6 w-full text-center"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="800"
            data-aos-once="true"
          >
            {activeTab === "activities" && (
              <div id="activities-tab">
                <Activities />
              </div>
            )}
            {activeTab === "professional skills" && (
              <div id="professional skills-tab">
                <Skills />
              </div>
            )}
            {activeTab === "certifications" && (
              <div id="certifications-tab">
                <Certifications />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
