import React, { ReactNode } from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            name
            tagline
            title
            description
            url
            image
            social {
              twitter
            }
          }
        }
      }
    `}
    render={data => (
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#1B1B38" />

        <title>{data.site.siteMetadata.name}</title>
        <link rel="canonical" href={data.site.siteMetadata.url} />
        <meta
          name="description"
          content={data.site.siteMetadata.description}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta
          property="og:description"
          content={data.site.siteMetadata.description}
        />
        <meta property="og:url" content={data.site.siteMetadata.url} />
        <meta property="og:image" content={data.site.siteMetadata.image} />
        <meta property="og:site_name" content={data.site.siteMetadata.name} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content={data.site.siteMetadata.image} />
        <meta name="twitter:title" content={data.site.siteMetadata.title} />
        <meta
          name="twitter:description"
          content={data.site.siteMetadata.description}
        />
        <meta
          name="twitter:site"
          content={data.site.siteMetadata.social.twitter}
        />
        <meta
          name="twitter:creator"
          content={data.site.siteMetadata.social.twitter}
        />
        <script type="application/ld+json">
          {`{
        "@context": "http://schema.org",
        "@type": "Organization",
        name: {data.site.siteMetadata.name},
        legalName: "Alembic Pty Ltd",
        url: {data.site.siteMetadata.url},
        logo: {data.site.siteMetadata.image},
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
    )}
  />
)
