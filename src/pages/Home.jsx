import "../styles/home.scss";
import "../styles/globals.scss";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header page="home" />
      <div className="Home">
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
            <Link to="/coding-projects" className="link">
              &gt; cd .\coding-projects\
            </Link>
          </div>

          <div className="activity">
            <h2>Craft</h2>
            <Link to="/papercrafts" className="link">
              &gt; cd .\papercrafts\
            </Link>
          </div>

          <h2>Work in progress...</h2>
        </div>
      </div>
      <Footer page="home" />
    </>
  );
}
