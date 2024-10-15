import "../styles/projects.scss";
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
      <div className="Projects Code">
        <div className="content">

          <h1>Coding Projects</h1>
          <div className="projects-grid">

            <CodeBtn 
              id="1" 
              name="CADMUS"
              link="https://www.cadmusanalytics.com/"
              img={CADMUS}
              desc={<p>A <span>public facing site</span> that represents an <span>EMS services startup</span></p>}
            />

            <CodeBtn 
              id="2" 
              name="This Site"
              link="https://github.com/Hebe3834/Hebe3834.github.io"
              img={PERSONAL}
              desc={<p>A <span>personal website</span> for a <span>student developer</span></p>}
            />
            {/* <div className="tags">
                  <p className="lang">React</p>
                  <p className="web">SCSS</p>
                  <p className="db">Firebase</p>
                </div> */}

            <CodeBtn 
              id="3" 
              name="Wraplify"
              link="https://sites.google.com/view/wraplify-portfolio/"
              img={WRAPLIFY}
              desc={<p>An <span> Androdid app</span> that presents <span>listening insights</span> from <span>Spotify</span></p>}
            />
            {/* <div className="tags">
                  <p className="lang">Android Studio</p>
                  <p className="db">Firebase</p>
                </div> */}

            <CodeBtn 
              id="4" 
              name="Little Venice"
              link="https://littlevenicerestaurant.com/"
              img={VENICE}
              desc={<p>An <span>online face</span> for a <span>family owned business</span></p>}
            />
            {/* <div className="tags">
                  <p className="lang">React</p>
                  <p className="lang">SASS</p>
                </div> */}

            


          </div>

        </div>
      </div>
      <Footer page="code" />
    </>
  );
};

export default Code;
