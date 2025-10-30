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

const ProjectOverlay: React.FC<ProjectOverlayProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-(--background-color-1) p-8 rounded-xl max-w-lg w-[90%] text-center relative shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-(--color-body-2) hover:text-(--color-primary) transition-colors"
          onClick={onClose}
        >
          <i className="las la-times text-2xl"></i>
        </button>

        {/* Project Image */}
        <img
          src={project.image || sample}
          alt={project.title}
          className="rounded-lg mb-4 w-full"
        />

        {/* Title & Description */}
        <h2 className="text-2xl font-semibold mb-2 text-(--color-primary)">
          {project.title}
        </h2>
        <p className="text-(--color-body-2)">{project.description}</p>

        {/* Tags */}
        <div className="mt-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="inline-block bg-(--color-primary)/10 text-(--color-primary) text-sm px-3 py-1 rounded-full mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectOverlay;
