import React from "react"
import logo from "../images/icon.png"
import { Link } from "gatsby"
import "../scss/components/header.scss"

export default () => {
  return (
    <header>
      <nav>
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
      </nav>
    </header>
  )
}
