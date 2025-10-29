import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

// AOS (Animate On Scroll)
import AOS from "aos";
import "aos/dist/aos.css";

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

      <h1 className="mt-[200px]">TEST</h1>
    </>
  );
}

export default App;
