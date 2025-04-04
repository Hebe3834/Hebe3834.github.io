import "../styles/about.scss";
import "../styles/globals.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import DesignBtn from "./components/DesignBtn";
import GUTINSTINCT from "../assets/gutinstinct.png";
import CADMUS from "../assets/cadmus.png";
import "../styles/projects.scss";


export default function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <Header page="about" />
      <div className="About">
        <div className="content">
          <div className="cells">
            <h1>
              Hi, I'm <span>Hebe</span>
            </h1>
            <div className="links">
              <a href="https://github.com/Hebe3834">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/hebe-huang/">
                <i className="fa-brands fa-linkedin"></i>{" "}
              </a>
              <a href="mailto:hebeluna00@gmail.com">
                <i className="fa-solid fa-envelope"></i>{" "}
              </a>
            </div>
          </div>
          <div className="desc">
            <p>
              <span>I'm here to design and program meaningful experiences.</span>
              <span>Welcome to my page!</span>
            </p>
            <div className="uni">
              <i className="fa-solid fa-graduation-cap"></i>
              <p>Currently studying CS @ Georgia Institute of Technology</p>
            </div>
          </div>

          <div className="Projects Designs">
          <h2>Featured Projects</h2>
            <div className="projects-grid flex flex-row flex-wrap gap-10 my-15">
              <DesignBtn
                id="1" 
                name="Gut Instinct"
                link="/designs/gutinstinct"
                img={GUTINSTINCT}
                scroll={false}
                className="w-28"
                desc={<p>A <span>mobile app</span> addressing the frustrations of <span>college students</span> with <span>dietary restrictions</span></p>}
                />
                <DesignBtn
                  id="1" 
                  name="Cadmus"
                  link="/designs/cadmus"
                  img={CADMUS}
                  scroll={true}
                  className="w-28"
                  desc={<p>A <span>public facing site</span> to represent an <span>EMS services startup</span></p>}
                  />
              </div>
          </div>

          <div className="work-section">
            <div className="verbs0">
              <p>IDEATE</p>
              <p>DRAFT</p>
              <p>DESIGN</p>
            </div>
            <div className="verbs1">
              <p>ANALYZE</p>
              <p>DIAGRAM</p>
              <p>DEVELOP</p>
            </div>
            <div className="work-desc">
              <h4>I like designing websites <br/> as much as I like coding them</h4>
              <h4>Explore my portfolio!</h4>
              <Link to="/code" className="link">
                &gt; cd .\code\
              </Link>
              <Link to="/designs" className="link">
                &gt; cd .\designs\
              </Link>
            </div>
          </div>

          {/* <div className="activity">
            <h2>Code</h2>
            <Link to="/work" className="link">
              &gt; cd .\work\
            </Link>
          </div>

          <div className="activity">
            <h2>Craft</h2>
            <Link to="/crafts" className="link">
              &gt; cd .\crafts\
            </Link>
          </div> */}

        </div>
      </div>
      <Footer page="about" />
    </>
  );
}
