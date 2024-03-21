import "../styles/work.scss";
import "../styles/globals.scss";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";
import PERSONAL from "../assets/personal-site.png";
import RAFI from "../assets/rafi_mockup.png";
import QUARTO from "../assets/quarto.png";
import IRIS from "../assets/project-iris.png";

const Work = () => {
  return (
    <>
      <Header page="work" />
      <Background />
      <div className="Work">
        <div className="content">

          <div className="designs">
            <h2>Design Work</h2>
            <div className="designs-grid">
              <div className="design">
                <img src={PERSONAL} alt="Design 1" />
              </div>
              <div className="design">
              <img src={RAFI} alt="Design 2" />
              </div>
            </div>
          </div>

          <div className="projects">
            <h2>Coding Projects</h2>
            <div className="project-grid">
              <div className="project">
                <img src={PERSONAL} alt="Project 1" />
              </div>
              <div className="project">
                <img src={QUARTO} alt="Project 2" />
              </div>
              <div className="project">
                <img src={IRIS} alt="Project 3" />
              </div>
            </div>
          </div>

          <h2>More coming soon :&#41;</h2>
        </div>
      </div>
      <Footer page="work" />
    </>
  );
};

export default Work;
