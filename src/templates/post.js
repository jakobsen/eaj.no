import React from "react"
import Layout from "./layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const image = post.frontmatter.thumbnail
      ? post.frontmatter.thumbnail.childImageSharp.rezise
      : null
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={image}
          pathname={this.props.location.pathname}
        />
        <div className="article-header">
          <h1>{post.frontmatter.title}</h1>
          <Img fixed={post.frontmatter.thumbnail.childImageSharp.fixed} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export default PostTemplate

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
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
