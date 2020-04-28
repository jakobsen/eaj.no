import React from "react"
import Layout from "./layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="article-header">
        <h1>{post.frontmatter.title}</h1>
        <Img fixed={post.frontmatter.thumbnail.childImageSharp.fixed} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fixed(width: 120, height: 120) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
