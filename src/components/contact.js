import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <footer className="contact-footer">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:hasinichamodi4@gmail.com">
              hasinichamodi4@gmail.com
            </a>
          </p>

          <p>
            <strong>Connect:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/hasini-rathnayaka"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/HasiniCha"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://medium.com/@hasinichamodi4"
              target="_blank"
              rel="noreferrer"
            >
              Medium
            </a>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
