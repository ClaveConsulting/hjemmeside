const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'clave',
    description: 'Lorem ipsum',
    author: '',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#005550`,
        theme_color: `#005550`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "TweenLite": path.resolve('node_modules', 'gsap/src/minified/TweenLite.min.js'),
          "TweenMax": path.resolve('node_modules', 'gsap/src/minified/TweenMax.min.js'),
          "TimelineMax": path.resolve('node_modules', 'gsap/src/minified/TimelineMax.min.js'),
          "CSSRulePlugin": path.resolve('node_modules', 'gsap/src/minified/plugins/CSSRulePlugin.min.js'),
          "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js'),
          "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'),
        },
        extensions: []
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
