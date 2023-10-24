module.exports = {
  siteMetadata: {
    title: `Philip Willms`,
    description: ` While my journey into tech may not have been a lifelong passion, I
    quickly fell in love with the way of thinking coding demands. The
    combination of implementing complex logic with the artful translation of
    stunning designs into fully functional, visually striking websites
    defines my passion and expertise in frontend development.`,
    author: `Philip Willms`,
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
