import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <nav className="Navbar">
      <div className="NavbarLinks">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          offset={-100}
          smooth={true}
          duration={100}
          className="desktopMenuListItem"
          onClick={handleClick}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          offset={-190}
          smooth={true}
          duration={100}
          className="desktopMenuListItem"
          onClick={handleClick}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="Skills"
          spy={true}
          offset={-100}
          smooth={true}
          duration={100}
          className="desktopMenuListItem"
          onClick={handleClick}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          offset={-100}
          smooth={true}
          duration={100}
          className="desktopMenuListItem"
          onClick={handleClick}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          offset={-300}
          smooth={true}
          duration={100}
          className="desktopMenuListItem"
          onClick={handleClick}
        >
          <span className="DesktopMenu">
            <FontAwesomeIcon icon={faEnvelope} className="DesktopMenuIcon" />
            Contact Me
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
