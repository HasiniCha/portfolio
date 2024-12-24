import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import dp from "../assets/ProfilePic.jpg";
import "./intro.css";
import { Row } from "react-bootstrap";

const Intro = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ["Web Developer", "Software Developer"];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[index];

      if (!isDeleting && displayedText === currentRole) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === "") {
        // Switch to next role
        setIsDeleting(false);
        setIndex((index + 1) % roles.length);
      } else {
        const nextText = isDeleting
          ? currentRole.slice(0, displayedText.length - 1)
          : currentRole.slice(0, displayedText.length + 1);
        setTimeout(
          () => setDisplayedText(nextText),
          isDeleting ? deletingSpeed : typingSpeed
        );
      }
    };

    handleTyping();
  }, [displayedText, isDeleting, index, roles]);

  return (
    <section id="intro">
      <div id="introContent">
        <Row>
          <coloumn className="text">
            <span className="hello">Hello, </span>
            <span className="introText">
              I'm <span className="introName">Hasini Chamodi</span>
            </span>
            <p id="introPara">
              I am a <span className="dynamicRole">{displayedText}</span>
            </p>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <button className="btn">Learn More</button>
            </Link>
          </coloumn>
          <coloumn>
            <img className="profile-image" src={dp} alt="Hasini Chamodi" />
          </coloumn>
        </Row>
      </div>
    </section>
  );
};

export default Intro;
