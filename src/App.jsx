import styles from './App.module.css'
import Navbar from './components/navbar/Navbar'
import Hero  from './components/hero/Hero'
import About from './components/about/About'
import Education from './components/education/Education'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Certification from './components/certification/Certification'

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Certification />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
