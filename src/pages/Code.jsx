import "../styles/projects.scss";
import "../styles/globals.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PERSONAL from "../assets/personal-site.png";
import QUARTO from "../assets/quarto.png";
import CADMUS from "../assets/cadmus.png";
import WRAPLIFY from "../assets/wraplify.png";
import VENICE from "../assets/LittleVenice.png";
import CREATIVE from "../assets/webpages/creative-site-home.png";
import CodeBtn from "./components/CodeBtn";
import { useEffect } from "react";

const Code = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);
  
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
              link="/code/cadmus"
              img={CADMUS}
              scroll={true}
              desc={<p>A <span>public facing site</span> to represent an <span>EMS services startup</span></p>}
              tags={["React", "CSS"]}
            />

            {/* <CodeBtn 
              id="2" 
              name="This Site"
              link="https://github.com/Hebe3834/Hebe3834.github.io"
              img={PERSONAL}
              scroll={true}
              desc={<p>A <span>personal website</span> for a <span>student developer</span></p>}
              tags={["React", "SCSS", "Firebase"]}
            /> */}

            <CodeBtn 
              id="2" 
              name="Wraplify"
              link="/code/wraplify"
              // link="https://sites.google.com/view/wraplify-portfolio/"
              img={WRAPLIFY}
              scroll={true}
              desc={<p>An <span> Androdid app</span> that presents <span>listening insights</span> from <span>Spotify</span></p>}
              tags={["Android\nStudio", "Spotify API", "Firebase"]}
            />

            <CodeBtn 
              id="3" 
              name="Little Venice"
              link="/code/littlevenice"
              // link="https://littlevenicerestaurant.com/"
              img={VENICE}
              scroll={true}
              desc={<p>An <span>online face</span> for a <span>family owned restaurant</span></p>}
              tags={["React", "SCSS"]}
            />

            {/* <CodeBtn 
              id="4" 
              name="Creative Team Site"
              link="/code/creativesite"
              img={CREATIVE}
              scroll={true}
              desc={<p>A <span>public facing site</span> for a <span>printing and apparel business</span></p>}
              tags={["React", "SCSS"]}
            /> */}

            <CodeBtn 
              id="5" 
              name="Miscellaneous"
              link="/code/misc"
              img={QUARTO}
              scroll={true}
              desc={<p><span>Smaller projects</span></p>}
              tags={[]}
            />

            
          </div>

        </div>
      </div>
      <Footer page="code" />
    </>
  );
};

export default Code;
