module.exports = {
  siteMetadata: {
    name: `Alembic`,
    tagline: `Alembic Website`,
    title: `GraphQL and Elixir Software Development &amp; Consulting`,
    description: `A Sydney-based Software Development Consultancy building cutting edge Web and API experiences with Elixir, GraphQL and React.`,
    url: `https://alembic.com.au/`,
    image: `https://alembic.com.au/alembic-logo.png`
  },
  plugins: [{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/team`,
        name: 'images',
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: 'gatsby-plugin-favicons',
      options: {
        logo: './src/assets/images/alembic-logo.svg',
        title: 'Alembic',
        options: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          yandex: false,
          windows: false
        }
      }
    }
  ],
}