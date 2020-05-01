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
      minHeight: "calc(100vh - 190px)",
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
