import React from "react";
import Octocat from "../images/Octocat.png";
import Netlify from "../images/netlify.svg";
import Gatsby from "../images/Gatsby-Monogram.svg";
import "../scss/components/footer.scss";

export default () => {
  return (
    <footer className="footer container">
      <div className="footer-links">
        <a
          href="https://github.com/jakobsen"
          title="See the source on GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Octocat} alt="GitHub" />
        </a>
        <a
          href="https://netlify.com"
          title="Hosted with Netlify"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Netlify} alt="Netlify" />
        </a>
        <a
          href="https://gatsbyjs.org"
          title="Built with Gatsby"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Gatsby} alt="Gatsby" />
        </a>
      </div>
    </footer>
  );
};
