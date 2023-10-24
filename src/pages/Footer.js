import "../styles/footer.scss";
import "../styles/globals.scss";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <>
      <div className="Footer">
        <div className="content">
          <div className="row">
            {props.page === "home" ? (
              <div className="col">
                <p>
                  C:\Users\
                  <span>
                    <Link to="/" className="nav">
                      Hebe
                    </Link>
                  </span>
                  &gt; ls
                </p>

                <p className="directories">
                  <Link to={"/coding-projects"} className="nav">
                    coding-projects
                  </Link>
                  <Link to={"/papercrafts"} className="nav">
                    papercrafts
                  </Link>
                  <Link to={"/about"} className="nav">
                    about
                  </Link>
                </p>
              </div>
            ) : (
              <div className="col">
                <p>
                  C:\Users\
                  <span>
                    <Link to="/" className="nav">
                      Hebe
                    </Link>
                  </span>
                  &gt; cd {props.page}
                </p>

                <p>
                  C:\Users\
                  <span>
                    <Link to="/" className="nav">
                      Hebe
                    </Link>
                  </span>
                  \
                  <span>
                    <Link to={"/" + props.page} className="nav">
                      {props.page}
                    </Link>
                  </span>
                  &gt; ls ..
                </p>

                <p className="directories">
                  <Link to={"/coding-projects"} className="nav">
                    coding-projects
                  </Link>
                  <Link to={"/papercrafts"} className="nav">
                    papercrafts
                  </Link>
                  <Link to={"/about"} className="nav">
                    about
                  </Link>
                </p>
              </div>
            )}

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
        </div>
      </div>
    </>
  );
};

export default Footer;
