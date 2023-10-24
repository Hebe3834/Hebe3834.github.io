import "../styles/header.scss";
import "../styles/globals.scss";
import { Link } from "react-router-dom";
import HB from "../assets/butterfly.png";

const Header = (props) => {
  return (
    <>
      <header>
        <Link className="logo" to="/">
          <img src={HB} alt="logo" />
        </Link>
        <div className="nav">
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
        </div>
      </header>
    </>
  );
};

export default Header;
