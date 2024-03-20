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

  const headerClass = ((showNav || scrollPosition < 100) && scrollPosition > 75) ? "fullBackground" : "";
  const logoClass = (showNav || scrollPosition < 100) ? "" : " croppedBackground";

  return (
    <>
      <header className={headerClass}>
        <div className="content">
          <div className={"logo" + logoClass}  onClick={handleToggleNav}>
            <img src={HB} alt="logo" />
          </div>
          <div className="nav-container">
            <div className={"nav " + navClass}>
              <Link
                to="/"
                className={(
                  props.page === "about" ? "link curr-page" : "link"
                )}
              >
                about
              </Link>
              <Link
                to="/work"
                className={(
                  props.page === "work" ? "link curr-page" : "link"
                )}
              >
                work
              </Link>
              <Link
                to="/crafts"
                className={(
                  props.page === "crafts" ? "link curr-page" : "link"
                )}
              >
                crafts
              </Link>
              <Link
                to="/contact"
                className={(
                  props.page === "contact" ? "link curr-page" : "link"
                )}
              >
                contact
              </Link>
              <i className={"fa-solid " + arrowClass} onClick={handleToggleNav}></i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
