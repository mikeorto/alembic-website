const description = `A Sydney-based Software Development Consultancy building cutting edge Web and API experiences with Elixir, GraphQL and React.`

module.exports = {
  siteMetadata: {
    name: `Alembic`,
    tagline: `Alembic Website`,
    title: `GraphQL and Elixir Software Development &amp; Consulting`,
    description: description,
    url: `https://alembic.com.au/`,
    image: `https://alembic.com.au/alembic-logo.png`,
    social: {
      twitter: `@team_alembic`,
    },
    menulinks: [{
        name: "Work",
        link: "/work",
      },
      {
        name: "Careers",
        link: "/careers",
      },
      {
        name: `Purpose`,
        link: `/purpose`,
      },
      {
        name: `Team`,
        link: `/team`,
      },
      {
        name: `Community`,
        link: `/community`,
      },
      {
        name: `Contact`,
        link: `/contact`,
      },
      {
        name: `Blog`,
        link: `/blog`,
      },
    ],
  },
  plugins: [{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images/team`,
        name: `team-images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/community`,
        name: `community`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/team`,
        name: `team`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/main`,
        name: `main`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/community`,
        name: `community`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/case-studies`,
        name: `case-studies`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images/case-studies`,
        name: `case-study-images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/blog`,
        name: `blog`,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    {
      resolve: `gatsby-mdx`,
    },
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
      resolve: "gatsby-plugin-favicons",
      options: {
        logo: "./src/assets/images/alembic-logo.png",
        lang: "en",
        start_url: "/",
        title: "Alembic",
        description: description,
        theme_color: "#1B1B38",
        background_color: "#1B1B38",
        options: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
}