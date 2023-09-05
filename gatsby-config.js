/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: `/essentialworks`,

  siteMetadata: {
    title: `essentialworks`,
    siteUrl: `https://wchen-oxy.github.io`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-sitemap"]
};