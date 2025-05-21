import React from "react";
import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Reach out to me!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"src/assets/contact/emailIcon.png"} alt="emailIcon" />
          <a href="mailto:jama10292001@gmail.com" target="blank">jama10292001@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img src={"src/assets/contact/linkedinIcon.png"} alt="emailIcon" />
          <a href="https://www.linkedin.com/in/john-michael-reyes-543093356/" target="blank">linkedin.com/jm</a>
        </li>

        <li className={styles.link}>
          <img src={"src/assets/contact/githubIcon.png"} alt="emailIcon" />
          <a href="https://github.com/JMReyes1014" target="blank">github.com/JMReyes1014</a>
        </li>
      </ul>
    </footer>
  );
}
