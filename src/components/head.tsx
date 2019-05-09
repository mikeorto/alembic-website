import React from "react"
import Helmet from "react-helmet"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default () => {
  const {
    name,
    tagline,
    title,
    description,
    url,
    image,
    social,
  } = useSiteMetadata()
  return (
    <Helmet
    defaultTitle="Alembic &mdash; Custom Software, Elixir Developers, GraphQL APIs, React UIs"
    titleTemplate="%s &mdash; Alembic">
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="#1B1B38" />

      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={name} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={social.twitter} />
      <meta name="twitter:creator" content={social.twitter} />
      <script type="application/ld+json">
        {`{
        "@context": "http://schema.org",
        "@type": "Organization",
        name: {name},
        legalName: "Alembic Pty Ltd",
        url: {url},
        logo: {image},
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
      <script>
        {`// this code removes installed service workers from th
        // pre-Gatsby version of the website
        navigator.serviceWorker.getRegistrations().then(
          function(registrations) {
            for(let registration of registrations) {
              registration.unregister()
            }
          }
        )`}
      </script>
    </Helmet>
  )
}
