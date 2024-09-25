import "../styles/projects.scss";
import "../styles/designs.scss";
import "../styles/components/codebtn.scss";
import "../styles/globals.scss";
import Header from "./Header";
import Footer from "./Footer";
import PERSONAL from "../assets/personal-site.png";
import QUARTO from "../assets/quarto.png";
import CADMUS from "../assets/cadmus.png";
import WRAPLIFY from "../assets/wraplify.png";
import VENICE from "../assets/LittleVenice.png";
import CodeBtn from "./components/CodeBtn";

const Code = () => {
  return (
    <>
      <Header page="code" />
      <div className="Code">
        <div className="content">


          <div className="projects">
            <h2>Coding Projects</h2>
            <div className="project-grid">

              <CodeBtn />

              <a className="codeBtn" href="https://github.com/Hebe3834/Hebe3834.github.io">
                <div className="scale-box">
                  <img src={PERSONAL} alt="Project 1" />
                </div>
                <div className="overlayer">
                  <div className="tags">
                    <p className="lang">React</p>
                    <p className="web">SCSS</p>
                    <p className="db">Firebase</p>
                  </div>
                </div>
                <div className="desc">
                  <p>A <span>personal website</span> for a <span>student developer</span></p>
                  <h3>This Site</h3>
                </div>
              </a>
              
              <a className="design" href="https://sites.google.com/view/wraplify-portfolio/">
                <div className="scale-box">
                  <img src={WRAPLIFY} alt="Project 2" />
                  {/* <iframe src="c:\Users\hebe3\Downloads\LittleVenice.png" width="100%" height="100%" name="wraplify"/> */}
                </div>
                <div className="overlayer">
                  <div className="tags">
                    <p className="lang">Android Studio</p>
                    <p className="db">Firebase</p>
                  </div>
                </div>
                  <p>A <span>comprehensive Androdid app</span> displaying <span>Spotify listening history</span></p>
                  <h3>Wraplify</h3>
              </a>


              <a className="codeBtn" href="https://littlevenicerestaurant.com/">
                <div className="scale-box">
                  <img src={VENICE} alt="Project 3" />
                </div>
                <div className="overlayer">
                  <div className="tags">
                    <p className="lang">React</p>
                    <p className="lang">SASS</p>
                  </div>
                </div>
                <div className="desc">
                  <p>An <span>online face</span> for a <span>family owned business</span></p>
                  <h3>Little Venice</h3>
                </div>
              </a>






              {/* 

              personal site
              wecracked frontend
              gsu hackathon awards for llms *
              let us cook *
              spotify wrap app
              empathy bytes website
              quastify / solo leveling *
              pantryaide *
              2340 college scheduler (3 todo lists)
              gt webdev project platform
              red barn creative site 2 (ui given)
              little venice  
              cadmus ui
              
              */}
            </div>
          </div>

        </div>
      </div>
      <Footer page="code" />
    </>
  );
};

export default Code;
