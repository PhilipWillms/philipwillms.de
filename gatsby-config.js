module.exports = {
  siteMetadata: {
    title: `Philip Willms`,
    description: `Frontend Developer working at Instant Commerce in Amsterdam.`,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
