import React, { useState, useEffect } from "react";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const PROJECTS_PER_PAGE = 3;

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  // Reset to first page whenever the tag filter changes
  useEffect(() => {
    setCurrentPage(0);
  }, [selectedTag]);

  // Filter projects by tag
  const filteredProjects = projects.filter(
    (project) => selectedTag === "All" || project.tag.includes(selectedTag)
  );

  // Pagination calculations
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIdx = currentPage * PROJECTS_PER_PAGE;
  const visibleProjects = filteredProjects.slice(
    startIdx,
    startIdx + PROJECTS_PER_PAGE
  );

  const tags = ["All", "Web", "Mobile"];

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>My Projects</h2>

      {/* Tag buttons */}
      <div className={styles.buttonGroup}>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={selectedTag === tag ? styles.activeButton : styles.button}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project cards */}
      <div className={styles.projects}>
        {visibleProjects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>

      {/* Pagination controls (only show when more than one page) */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 0))}
            disabled={currentPage === 0}
            className={styles.pageButton}
            aria-label="Previous page"
          >
            ‹
          </button>
          <span className={styles.pageIndicator}>
            {currentPage + 1}/{totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={currentPage === totalPages - 1}
            className={styles.pageButton}
            aria-label="Next page"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}