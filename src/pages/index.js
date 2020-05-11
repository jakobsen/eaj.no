import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../templates/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";
import "../scss/components/index.scss";

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
            I'm Erik. I study math, I'm often wearing my{" "}
            <a href="https://en.wikipedia.org/wiki/Mariusgenser">
              Mariusgenser
            </a>
            , and like to learn about programming and the web in my free time.
          </p>
          <p>
            This page is a collection of articles and tutorials I write as I
            learn. I hope they can be helpful to you as well. Source code is
            available on{" "}
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
            <a href="mailto:hello@eaj.no">e-mail</a> or reach out on{" "}
            <a href="https://twitter.com/eaj_no">Twitter</a>.
          </p>
        </div>
        <h2>All articles</h2>
        <div className="articles-list">
          {data.allMdx.edges.map(({ node }) => (
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
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
`;
