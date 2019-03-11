module.exports = {
  siteMetadata: {
    name: `Alembic`,
    tagline: `Alembic website`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-mdx`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Open Sans:300,700", "Playfair Display:400,700"],
        },
      },
    },
  ],
}
