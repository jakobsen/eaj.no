import React from "react"
import { Link } from "gatsby"

import Layout from "../templates/layout"
import SEO from "../components/seo"

export default () => {
  return (
    <Layout>
      <SEO title="Page not found" />
      <div className="container">
        <h1>Oisann!</h1>
        <p>
          It seems you have found a page that doesn't exist. I am sorry if that
          is somewhat anxiety inducing.
        </p>
        <p>
          If you came here through clicking a link, please{" "}
          <a href="404@eaj.no">send me an e-mail</a>
          telling me where the broken link is, or{" "}
          <a
            href="https://github.com/jakobsen/eaj.no/issues/new/choose"
            target="_blank"
            rel="noreferrer noopener"
          >
            open an issue in the Github repo
          </a>
          .
        </p>
        <p>
          <Link to="/">Click here</Link> to go to the home page.
        </p>
      </div>
    </Layout>
  )
}
