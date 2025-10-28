import "../styles/Home.css";
import HomeLeft from "../components/HomeLeft";
import HomeRight from "../components/HomeRight";

function Home() {
  return (
    <section className="scroll-mt-(--header-h)" id="home">
      <div className="wrapper">
        <div>
          <div className="container">
            <HomeLeft />
            <HomeRight />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
