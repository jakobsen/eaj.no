import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../templates/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "../scss/components/index.scss"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Learning to code on the internet" />
      <div className="container">
        <h1>
          Hallaien!{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
        <div className="lead">
          <p>
            I'm Erik. I study math, love to cook, and like to learn about
            programming and the web in my free time.
          </p>
          <p>
            This page is a collection of articles I write as I learn. I hope
            they can be helpful to you as well. Source code is available on{" "}
            <a
              href="https://github.com/jakobsen"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>
            .
          </p>
          <p>
            If you want to get in touch, send me an{" "}
            <a href="mailto:hello@eaj.no">e-mail</a>!{" "}
            <span role="img" aria-label="letter">
              ✉️
            </span>
          </p>
        </div>
        <h2>All articles</h2>
        <div className="articles-list">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="each-article" key={node.id}>
              <Img fixed={node.frontmatter.thumbnail.childImageSharp.fixed} />
              <Link to={node.fields.slug}>
                <h3>{node.frontmatter.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            thumbnail {
              childImageSharp {
                fixed(width: 32, height: 32) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
