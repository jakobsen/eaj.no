import React from "react"
import logo from "../images/icon.png"
import { Link } from "gatsby"
import "../scss/components/header.scss"

export default () => {
  return (
    <header>
      <nav className="container">
        <div className="brand">
          <Link to="/">
            <img src={logo} alt="" className="logo" />{" "}
            <h2>Erik André Jakobsen</h2>
          </Link>
        </div>
      </nav>
    </header>
  )
}
