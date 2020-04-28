import React from "react"
import { Link } from "gatsby"
import logo from "../images/icon.png"

export default ({ children }) => (
  <>
    <nav>
      <div className="nav-container">
        <div className="brand">
          <Link to="/">
            <img src={logo} alt="" className="logo" />{" "}
            <h2>Erik André Jakobsen</h2>
          </Link>
        </div>
        <div className="links">
          <Link to="/about">
            <h3>About</h3>
          </Link>
        </div>
      </div>
    </nav>
    <main>
      <div className="main-container">{children}</div>
    </main>
  </>
)
