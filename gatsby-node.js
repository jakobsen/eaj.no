const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const lodash = require(`lodash`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    console.log(node)
    const slug = `/${lodash.kebabCase(node.frontmatter.title)}`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
