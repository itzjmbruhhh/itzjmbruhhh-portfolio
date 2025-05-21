import React, { useState } from "react";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const filteredProjects = projects.filter(
    (project) => selectedTag === "All" || project.tag.includes(selectedTag)
  );

  const tags = ["All", "Web", "Mobile"];

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.buttonGroup}>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={
              selectedTag === tag ? styles.activeButton : styles.button
            }
          >
            {tag}
          </button>
        ))}
      </div>
      <div className={styles.projects}>
        {filteredProjects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
}
