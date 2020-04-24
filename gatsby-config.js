module.exports = {
  siteMetadata: {
    title: `Eugene's Portfolio`,
    description: `Eugene Rivera's Portfolio website.`,
    author: `Eugene Rivera`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eugene's Portfolio`,
        short_name: `Eugene's Portfolio`,
        start_url: `/`,
        background_color: `#dfe9fb`,
        theme_color: `#dfe9fb`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`]
          },
          {
            family: `Raleway`,
            variants: [`100`]
          },
        ],
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: .3
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}