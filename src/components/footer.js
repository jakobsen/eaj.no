import React from "react"
import Octocat from "../images/Octocat.png"
import Netlify from "../images/netlify.svg"
import Trondheim from "../images/Trondheim.svg"
import Gatsby from "../images/Gatsby-Monogram.svg"
import "../scss/components/footer.scss"

export default () => {
  return (
    <footer className="footer container">
      <div>Contact me.</div>
      <div className="footer-links">
        <a
          href="https://github.com/jakobsen"
          title="See the source on GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Octocat} alt="GitHub" />
        </a>
        <a
          href="https://netlify.com"
          title="Hosted with Netlify"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Netlify} alt="Netlify" />
        </a>
        <a
          href="https://gatsbyjs.org"
          title="Built with Gatsby"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Gatsby} alt="Gatsby" />
        </a>
        <a
          href="https://en.wikipedia.org/wiki/Trondheim"
          title="Made in Trondheim "
          target="_blank"
          rel="noreferrer"
        >
          <img src={Trondheim} alt="Trondheim" />
        </a>
      </div>
    </footer>
  )
}
