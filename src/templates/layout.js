import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import "../scss/components/layout.scss"
import "../scss/components/dark-mode.scss"

export default ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    }}
    className="site-wrapper"
  >
    <Header />
    <main>
      <div className="container">{children}</div>
    </main>
    <div style={{ flex: "1" }}></div>
    <Footer />
  </div>
)
