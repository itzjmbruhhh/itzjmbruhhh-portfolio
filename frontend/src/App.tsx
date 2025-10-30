import "./App.css";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out-cubic",
    });

    // refresh AOS when new content mounts (helpful in SPA)
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Education />
      <Resume />
      <Projects />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
