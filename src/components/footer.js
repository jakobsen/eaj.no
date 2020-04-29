import React from "react"
import Github from "../images/github.svg"
import "../scss/components/footer.scss"

export default () => {
  return (
    <footer>
      <div className="footer-container">
        <a href="https://github.com/jakobsen">
          <Github />
        </a>
      </div>
    </footer>
  )
}
