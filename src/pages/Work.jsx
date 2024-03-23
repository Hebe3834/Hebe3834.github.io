import "../styles/work.scss";
import "../styles/globals.scss";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";
import PERSONAL from "../assets/personal-site.png";
import RAFI from "../assets/rafi_mockup.png";
import QUESTIFY from "../assets/questify.png";
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
              <a className="design" href="https://github.com/Hebe3834/Hebe3834.github.io">
                <div className="scale-box">
                  <img src={PERSONAL} alt="Design 1" />
                </div>
                <div className="blur"></div>
                <p>A <span>personal website</span> for a <span>student developer</span></p>
                <h3>Personal Website</h3>
              </a>
              <a className="design" href="#">
                <div className="scale-box">
                  <img src={RAFI} alt="Design 2" />
                </div>
                <div className="blur"></div>
                <p>An <span>online portfolio</span> for an <span>independent artist</span></p>
                <h3>Rafi's Portfolio</h3>
              </a>
              <a className="design" href="#">
                <div className="scale-box">
                  <img src={QUESTIFY} alt="Design 3" />
                </div>
                <div className="blur"></div>
                <p>A gamified <span>workout</span> and <span>fitness interface</span></p>
                <h3>Questify</h3>
              </a>
            </div>
          </div>

          <div className="projects">
            <h2>Coding Projects</h2>
            <div className="project-grid">
              <a className="project" href="https://github.com/Hebe3834/Hebe3834.github.io">
                <div className="scale-box">
                  <img src={PERSONAL} alt="Project 1" />
                </div>
                <div className="overlayer">
                  <div className="tags">
                    <p className="web">React</p>
                    <p className="web">SCSS</p>
                    <p className="db">Firebase</p>
                  </div>
                </div>
                <div className="desc">
                  <p>A <span>personal website</span> for a <span>student developer</span></p>
                  <h3>This Site</h3>
                </div>
              </a>
              <a className="project" href="https://github.com/Hebe3834/Quarto">
                <div className="scale-box">
                  <img src={QUARTO} alt="Project 2" />
                </div>
                <div className="overlayer">
                  <div className="tags">
                    <p className="lang">Python</p>
                  </div>
                </div>
                <div className="desc">
                  <p>A turn-based <span>puzzle game</span> played through the <span>terminal</span></p>
                  <h3>Quarto</h3>
                </div>
              </a>
              <a className="project" href="https://github.com/RoshaniS5/P4">
                <div className="scale-box">
                  <img src={IRIS} alt="Project 3" />
                </div>
                <div className="overlayer">
                  <div className="tags">
                      <p className="lang">Python</p>
                      <p className="web">Flask</p>
                      <p className="web">HTML/CSS</p>
                      <p className="web">JavaScript</p>
                      <p className="db">SQLite</p>
                  </div>
                </div>
                <div className="desc">
                  <p>An anonymous <span>web app</span> for posting custom hand-drawn drawn <span>messages</span></p>
                  <h3>Project Iris</h3>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
      <Footer page="work" />
    </>
  );
};

export default Work;
