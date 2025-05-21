import React from "react";
import styles from "./Education.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

export default function Education() {
  return (
    <section id="education" className={styles.container}>
      <h2 className={styles.title}>Education & Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  width="75px"
                  src={historyItem.imageSrc}
                  alt={historyItem.school}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.level}, ${historyItem.school}`}</h3>
                  <p>{`${historyItem.startYear} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.achievements.map((achievement, id) => {
                      return <li key={id}>{achievement}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
