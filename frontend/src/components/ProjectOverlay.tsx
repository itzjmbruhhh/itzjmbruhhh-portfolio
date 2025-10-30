import React from "react";
import sample from "../assets/projects/1.png";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

interface ProjectOverlayProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectOverlay: React.FC<ProjectOverlayProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center 
             bg-black/80 backdrop-blur-md backdrop-saturate-150"
      onClick={onClose}
    >
      <div
        className="box-shadow-proj-overlay"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="cursor-pointer absolute top-3 right-4 text-(--color-body-2) hover:text-(--color-primary) transition-colors"
          onClick={onClose}
        >
          <i className="las la-times text-2xl"></i>
        </button>

        {/* Project Image */}
        <img
          src={project.image || sample}
          alt={project.title}
          className="rounded-lg mb-4 md:w-[300px] xl:w-[550px] w-[550px] "
        />

        {/* Content Start */}
        <div className="text-justify">

          {/* Tags */}
          <div className="mb-2 xl:mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="inline-block bg-(--color-primary)/10 text-(--color-primary) text-[11px] xl:text-sm px-1.5 py-0.5 rounded-full mr-2"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Description */}
          <h2 className="text-[17px] md:text-2xl xl:text-4xl font-semibold mb-1 text-(--color-gray) text-justify">
            {project.title}
          </h2>
          <p className="text-(--color-body-2) text-[12px] h-[150px] xl:h-[50%] xl:text-[18px]">{project.description}</p>
          
          {/* Button */}
          <div className="mt-8">
            <a href={project.link} className="box-shadow hover cv-button font-medium">View on Github</a>
          </div>
          
        </div>
        {/* Content End */}
      </div>
    </div>
  );
};

export default ProjectOverlay;
