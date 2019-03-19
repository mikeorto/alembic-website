import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
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
            menulinks {
              name
              link
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}