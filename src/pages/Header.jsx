import "../styles/header.scss";
import "../styles/globals.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HB from "../assets/butterfly.png";

const Header = (props) => {

  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    }
    console.log(scrollPosition);
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const navClass = (showNav || scrollPosition < 100) ? "" : "hidden";

  const arrowClass = scrollPosition < 100 ? "hidden" : (
    showNav ? "fa-angle-left" : "fa-angle-right"
  );

  const headerClass = (showNav || scrollPosition < 100) ? "darkBackground" : "";

  return (
    <>
      <header className={headerClass}>
        <div className="logo"  onClick={handleToggleNav}>
          <img src={HB} alt="logo" />
        </div>
        <div className="nav-container">
          <div className={"nav " + navClass}>
            <Link
              to="/"
              style={{
                borderBottom:
                  props.page === "home" ? "2px solid var(--purple)" : "",
              }}
            >
              Home
            </Link>
            <Link
              to="/coding-projects"
              style={{
                borderBottom:
                  props.page === "coding-projects"
                    ? "2px solid var(--purple)"
                    : "",
              }}
            >
              Code
            </Link>
            <Link
              to="/Papercrafts"
              style={{
                borderBottom:
                  props.page === "papercrafts" ? "2px solid var(--purple)" : "",
              }}
            >
              Papercrafts
            </Link>
            <Link
              to="/About"
              style={{
                borderBottom:
                  props.page === "about" ? "2px solid var(--purple)" : "",
              }}
            >
              About Me
            </Link>
            <i className={"fa-solid " + arrowClass} onClick={handleToggleNav}></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
