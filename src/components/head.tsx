import React, { ReactNode } from "react"
import Helmet from "react-helmet"

export default () => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />

    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Playfair+Display:400,700"
      rel="preload"
    />

    <title>Alembic</title>
    <link rel="canonical" href="https://alembic.com.au/" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="GraphQL and Elixir Software Development &amp; Consulting"
    />
    <meta
      property="og:description"
      content="A Sydney-based Software Development Consultancy building cutting edge Web and API experiences with Elixir, GraphQL and React."
    />
    <meta property="og:url" content="https://alembic.com.au/" />
    <meta
      property="og:image"
      content="https://alembic.com.au/alembic-logo.png"
    />
    <meta property="og:site_name" content="Alembic" />
    <meta name="twitter:card" content="summary" />
    <meta
      name="twitter:image"
      content="https://alembic.com.au/alembic-logo.png"
    />
    <meta
      name="twitter:title"
      content="GraphQL and Elixir Software Development &amp; Consulting"
    />
    <meta
      name="twitter:description"
      content="A Sydney-based Software Development Consultancy building cutting edge Web and API experiences with Elixir, GraphQL and React."
    />
    <meta name="twitter:site" content="@team_alembic" />
    <meta name="twitter:creator" content="@team_alembic" />
    <script type="application/ld+json">
      {`{
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Alembic",
        legalName: "Alembic Pty Ltd",
        url: "https://alembic.com.au",
        logo: "https://alembic.com.au/alembic-logo.png",
        foundingDate: "2017",
        founders: [
          {
            "@type": "Person",
            name: "Suzie Price",
          },
          {
            "@type": "Person",
            name: "James Sadler",
          },
          {
            "@type": "Person",
            name: "Josh Price",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Level 6, 241 Commonwealth Street",
          addressLocality: "Surry Hills",
          addressRegion: "NSW",
          postalCode: "2010",
          addressCountry: "Australia",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          telephone: "+61-1300-253-624",
          email: "hello@alembic.com.au",
        },
        sameAs: [
          "https://github.com/team-alembic",
          "https://www.linkedin.com/company/team-alembic",
          "https://twitter.com/teamalembic",
        ],
      }`}
    </script>
  </Helmet>
)
