module.exports = {
  siteMetadata: {
    title: "Riana Andrianome Portfolio",
    author: "Riana Andrianome",
    description: "Portfolio built with ReactJS and Gatsby"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    "gatsby-plugin-resolve-src",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: 'data',
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    'gatsby-plugin-styled-components'
  ],
}
