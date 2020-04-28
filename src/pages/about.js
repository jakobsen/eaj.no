import React from "react"
import Layout from "../templates/layout"
import SEO from "../components/seo"

export default () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <h1>About Me</h1>
      <p>Hey!</p>
      <p>
        My name is Erik, and I like to cook, play music and make stuff for
        computers. This site is tailored towards the latter, and my goal is to
        share everything I learn so that others may benefit from it as well.
      </p>
      <p>
        The code for everything I write about here will be available on my{" "}
        <a href="https://github.com/jakobsen">GitHub</a>.
      </p>
      <p>
        If you want to get in touch,{" "}
        <a href="mailto:erik.a.jakobsen@gmail.com">send me a message</a>!
      </p>
    </Layout>
  )
}
