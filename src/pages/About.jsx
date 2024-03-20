import "../styles/about.scss";
import "../styles/globals.scss";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Header page="about" />
      <div className="background">
        <svg className="blob0" xmlns="http://www.w3.org/2000/svg" width="484" height="199" viewBox="0 0 484 199" fill="none">
          <path d="M120 133.212L0 0H361L319.5 41.9464L483.5 119.992L391.5 198.546L120 133.212Z" fill="#6F6480"/>
        </svg>
        <svg className="blob1" xmlns="http://www.w3.org/2000/svg" width="765" height="350" viewBox="0 0 765 350" fill="none">
          <path d="M0 142.285L40 282.106L153.5 350.491H765V137.455L451.5 17.9711L289 0.684082L275 155.504L0 142.285Z" fill="#6F6480"/>
        </svg>
        <div className="blur"></div>
      </div>
      <div className="About">
        <div className="content">
          <div className="cells">
            <h1>
              Hi I'm <span>Hebe</span>
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
          <p>
            I study Computer Science at the Georgia Institute of Technology. I'm
            interested in software development, visual design, and the
            intersection between the two. Welcome to my page!
          </p>

          <h3>
            <i className="fa-solid fa-angles-right"></i>
            Some things I do
            <i className="fa-solid fa-angles-left"></i>
          </h3>

          <div className="activity">
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
          </div>

          <h2>Work in progress...</h2>
        </div>
      </div>
      <Footer page="about" />
    </>
  );
}
