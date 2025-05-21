import React from "react";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  project: { title, image, description, techStack, links },
}) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.overlay}>
          {links.map((link, index) => (
            <a key={index} href={link.url} className={styles.icon} target="blank">
              <img src={link.icon} alt={link.name} />
            </a>
          ))}
        </div>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.techStack}>
        {techStack.map((tech, id) => {
          return (
            <li key={id} className={styles.tech}>
              {tech}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
