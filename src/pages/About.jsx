import "../styles/about.scss";
import "../styles/globals.scss";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function About() {
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
              <Link to="/work" className="link">
                &gt; cd .\work\
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

          <h2>Work in progress...</h2>
        </div>
      </div>
      <Footer page="about" />
    </>
  );
}
