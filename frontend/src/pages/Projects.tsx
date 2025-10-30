import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import sample from "../assets/projects/1.png";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/Projects.css";
import ProjectOverlay from "../components/ProjectOverlay";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind CSS.",
      tags: ["Web"],
    },
    {
      title: "Coffee Tracker App",
      description: "A cross-platform coffee tracker built with React Native.",
      tags: ["Mobile", "Web"],
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack platform for online sales.",
      tags: ["Web"],
    },
    {
      title: "IoT Dashboard",
      description: "A responsive dashboard for IoT devices.",
      tags: ["Web", "Mobile"],
    },
    {
      title: "ML Model Deployer",
      description: "A web-based interface for deploying ML models.",
      tags: ["Web"],
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeTab));

  return (
    <section
      id="projects"
      className="scroll-mt-[110px] md:scroll-mt-[120px] xl:scroll-mt-[120px]"
    >
      <div className="wrapper flex flex-col gap-10">
        {/* Section Heading */}
        <div className="xl:mb-5" data-aos="fade-up" data-aos-duration="500">
          <h3 className="bio">What I've built?</h3>
          <h1 className="heading flex justify-center">My Projects</h1>
        </div>

        {/* Tabs */}
        <center>
          <ul
            className="w-[80%] box-shadow-res flex justify-center items-center flex-col xl:flex-row gap-0 m-0 p-0 list-none"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            {["All", "Mobile", "Web"].map((tab) => (
              <li
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`nav-item-res cursor-pointer px-4 py-2 transition-colors ${
                  activeTab === tab
                    ? "active text-(--color-primary)"
                    : "text-(--color-body-2)"
                }`}
              >
                {tab}
              </li>
            ))}
          </ul>
        </center>

        {/* Carousel */}
        <div className="mt-5 w-full relative px-3 sm:px-6 md:px-10 xl:px-30">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            navigation={true}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            modules={[Navigation, Pagination]}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 }, // small
              768: { slidesPerView: 2, spaceBetween: 25 }, // medium
              1280: { slidesPerView: 3, spaceBetween: 30 }, // xl (unchanged)
            }}
            className="custom-swiper"
          >
            {filteredProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <div
                  className="project-card box-shadow-proj cursor-pointer group transition-all duration-300
          p-4 sm:p-5 md:p-6 xl:p-7 rounded-[12px]"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="overflow-hidden rounded-[10px] mb-5">
                    <img
                      src={sample}
                      alt="photo"
                      className="rounded-[10px] w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div>
                    <span className="bio text-[14px]!">{project.tags}</span>

                    {/* Title + icon */}
                    <h1 className="my-2 text-xl md:text-2xl font-semibold flex items-center gap-2 transition-colors duration-300 group-hover:text-(--color-primary)">
                      {project.title}
                      <span className="opacity-0 transition-all duration-300 group-hover:opacity-100 text-(--color-primary)">
                        <i className="las la-arrow-right text-2xl"></i>
                      </span>
                    </h1>

                    <p className="text-(--color-body-2) text-[15px] md:text-[16px]">
                      {project.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots (only visible on small screens) */}
          <div className="custom-pagination mt-6 flex justify-center xl:hidden"></div>
        </div>

        {/* Overlay Component */}
        <ProjectOverlay
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
