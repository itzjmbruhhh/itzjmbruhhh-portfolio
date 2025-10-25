import React from "react";
import "../styles/Home.css";
import HomeLeft from "../components/HomeLeft";
import HomeRight from "../components/HomeRight";

function Home() {
  return (
    <section className="home-page" id="home">
      <div className="home-page-wrapper mx-20 mt-30 flex justify-center">
        <div>
          <div className="container">
            <HomeLeft/>
            <HomeRight />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
