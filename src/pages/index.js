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
      <h3>All articles</h3>
      <div className="articles-list">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.fields.slug} key={node.id}>
            <div className="each-article">
              <Img fixed={node.frontmatter.thumbnail.childImageSharp.fixed} />
              <h3>{node.frontmatter.title}</h3>
            </div>
          </Link>
        ))}
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
