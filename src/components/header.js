import React from "react"
import logo from "../images/icon.png"
import { Link } from "gatsby"
import "../scss/components/header.scss"
import sun from "../images/light-mode.svg"
import moon from "../images/dark-mode.svg"

class Header extends React.Component {
  constructor(props) {
    super(props)
    const userLight = JSON.parse(localStorage.getItem("light"))
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      darkMode: userLight ? false : true,
      imageSrc: sun,
    }
    if (this.state.darkMode) {
      document.querySelector("body").classList.add("dark")
    }
  }

  handleClick() {
    this.setState({ darkMode: !this.state.darkMode })
    localStorage.setItem("light", JSON.stringify(this.state.darkMode))
    const body = document.querySelector("body")
    body.classList.toggle("dark")
    console.log(body.classList.contains("dark"))
  }

  render() {
    return (
      <header>
        <nav className="container">
          <div className="brand">
            <Link to="/">
              <img src={logo} alt="" className="logo" />{" "}
              <h2>Erik André Jakobsen</h2>
            </Link>
          </div>
          <div className="links">
            <button onClick={this.handleClick}>
              <img
                src={
                  document.querySelector("body").classList.contains("dark")
                    ? sun
                    : moon
                }
                alt="light-mode"
              />
            </button>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
