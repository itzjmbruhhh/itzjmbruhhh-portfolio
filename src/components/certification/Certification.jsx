import React from "react";
import styles from "./Certification.module.css";
import certifications from "../../data/certifications.json";
import competition from "../../data/competitions.json";

export default function Certification() {
  return (
    <section id="certification" className={styles.container}>
      <h2 className={styles.title}>Certifications and Activities</h2>
      <div className={styles.content}>

        <ul className={styles.competition}>
          {competition.map((competitionItem, id) => {
            return (
              <li key={id} className={styles.competitionItem}>
                <div className={styles.competitionItemDetails}>
                  <h3>{`${competitionItem.event}, ${competitionItem.place}`}</h3>
                  <p>{`${competitionItem.date}`}</p>
                  <ul>
                    {competitionItem.awards.map((awards, id) => {
                      return <li key={id}>{awards}</li>;
                    })}
                  </ul>
                </div>
                <img
                  width="75px"
                  src={competitionItem.imageSrc}
                  alt={competitionItem.event}
                />
              </li>
            );
          })}
        </ul>

        <div className={styles.certifications}>
          {certifications.map((certification, id) => {
            return (
              <div key={id} className={styles.certification}>
                <div className={styles.certificationImageContainer}>
                  <img src={certification.imageSrc} alt={certification.title} />
                </div>
                <p>{certification.title}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
