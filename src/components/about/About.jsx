import React from "react";
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img src={"src/assets/about/aboutImage.png"} alt="aboutImage" className={styles.aboutImg}/>
        <ul className={styles.aboutItems}>

          <li className={styles.aboutItem}>
            <img src={"src/assets/about/cursorIcon.png"} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I create frontend projects mainly on React! I design all of my own projects, and I try to build them one step at a time.</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={"src/assets/about/serverIcon.png"} alt="server" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I create backend projects mainly on Django! I specialize on API's and database management!</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={"src/assets/about/aiIcon.png"} alt="AI" />
            <div className={styles.aboutItemText}>
              <h3>AI Developer</h3>
              <p>I love training and making AI models. From Convolutional Neural Networks to Natural Language Processing. I use TensorFlow and PyTorch!</p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
}
