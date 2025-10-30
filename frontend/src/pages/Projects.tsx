import React, { useState } from "react";
import "../styles/Projects.css";
import ProjectOverlay from "../components/ProjectOverlay";
import ProjectCarousel from "../components/ProjectCarousel";
import projectsData from "../assets/utils/Projects.json";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  url?: string;
}

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((project) => project.tags.includes(activeTab));

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
        <ProjectCarousel
          projects={filteredProjects}
          onProjectSelect={setSelectedProject}
        />

        {/* Overlay */}
        <ProjectOverlay
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
