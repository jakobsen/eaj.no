/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Erik André Jakobsen`,
    description: `Erik André Jakobsen is a mathematician and web developer who learns in public.`,
    author: `Erik André Jakobsen`,
    keywords: [
      `latex tutorial`,
      `gatsby tutorial`,
      `developer blog`,
      `blog`,
      `norsk blogg`,
      `koding`,
      `software`,
    ],
    siteUrl: `https://eaj.no`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`, // this entry has to be the first or will not work as per FAQ
      options: {
        path: `${__dirname}/static/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/thumbnails`,
        name: `thumbnails`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-sharp`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 850,
              backgroundColor: `transparent`,
              wrapperStyle: `
                margin: 2rem auto;
                box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
              `,
            },
          },
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: `›`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
