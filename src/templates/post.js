import React from "react"
import Layout from "./layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import "../scss/components/article.scss"
require(`katex/dist/katex.min.css`)

class PostTemplate extends React.Component {
  render() {
    const regex = /eaj-no(\/.*)/gm
    const post = this.props.data.markdownRemark
    const relativePath = regex.exec(post.fileAbsolutePath)[1]
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
        <article>
          <div className="article-header">
            <div className="frontmatter">
              <h1>{post.frontmatter.title}</h1>
              <h4 className="date">{post.frontmatter.date}</h4>
              <h4>
                <a
                  href={`https://github.com/jakobsen/eaj.no/blob/master${relativePath}`}
                >
                  <span role="img" aria-label="pencil">
                    ✏️
                  </span>
                  Edit this article on GitHub
                </a>
              </h4>
            </div>
            <Img fixed={post.frontmatter.thumbnail.childImageSharp.fixed} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
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
      html
      fileAbsolutePath
      frontmatter {
        title
        date(formatString: "MMM D, YYYY")
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
