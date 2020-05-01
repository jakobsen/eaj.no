import React, { useState, useLayoutEffect } from "react"
import logo from "../images/icon.png"
import { Link } from "gatsby"
import "../scss/components/header.scss"
import sun from "../images/light-mode.svg"
import moon from "../images/dark-mode.svg"

export default () => {
  const [theme, setTheme] = useState(() => {
    try {
      const storedValue = window.localStorage.getItem("theme")
      return storedValue ? JSON.parse(storedValue) : null
    } catch (error) {
      return null
    }
  })
  useLayoutEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
    const body = document.querySelector("body")
    if (theme === "dark") {
      body.classList.add("dark")
    } else {
      body.classList.remove("dark")
    }
  })

  const [icon, setIcon] = useState(() => {
    try {
      const storedValue = window.localStorage.getItem("theme")
      return storedValue && JSON.parse(storedValue) === "dark" ? sun : moon
    } catch (error) {
      return moon
    }
  })
  useLayoutEffect(() => {
    if (theme === "dark") {
      setIcon(sun)
    } else {
      setIcon(moon)
    }
  }, [theme])

  // Add scroll listener to window
  useLayoutEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY
      const headerElement = document.querySelector("header")

      if (scrollY >= 50) {
        headerElement.classList.add("scroll")
      } else {
        headerElement.classList.remove("scroll")
      }
    })
  })
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
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <img src={icon} alt="light-mode" />
          </button>
        </div>
      </nav>
    </header>
  )
}
