import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export default function  Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm JM</h1>
        <p className={styles.description}>I'm a student developer. With experience using React-Django, Tensorflow and Pytorch. Reach out if you'd like to learn more!</p>
        <div className={styles.links}>
          <a href="mailto:jama10292001@gmail.com" className={styles.contactBtn}>Contact Me</a>
          <a href="src/assets/hero/CV.pdf" download="JM_Reyes_Resume" className={styles.contactBtn}>My Resume</a>
        </div>
      </div>
      <img src={"src/assets/hero/heroImage.png"} alt="hero" className={styles.heroImg} />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}