import React from "react"
import { Link } from "gatsby"
import logo from "../images/icon.png"

export default ({ children }) => (
  <>
    <nav>
      <div className="nav-container">
        <div className="brand">
          <Link to="/">
            <img src={logo} alt="" className="logo" /> Erik André Jakobsen
          </Link>
        </div>
        <div className="links">
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
    <main>
      <div className="main-container">{children}</div>
    </main>
  </>
)
