/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Erik André Jakobsen`,
        short_name: `eaj.no`,
        start_url: `/`,
        background_color: `#f0f0f0`,
        theme_color: `#bb002d`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/content/`,
      },
    },
  ],
}
