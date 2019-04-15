import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout/layout"
import Helmet from "react-helmet"
import PurposeContent from "../content/main/purpose.mdx"

import "../App.scss"

export default ({
  data: {
    teamMembers: { edges: members },
    teamMemberImages: { edges: images },
  },
}: {
  data: any
}) => {
  return (
    <Layout>
      <Helmet>
        <title>We Are Team Alembic</title>
      </Helmet>

      <div className="what-we-do wrap">
        <aside>
          <PurposeContent />
        </aside>
      </div>

      <div className="team wrap">
        <aside>
          <h2 className="line">
            <span>We Are Team Alembic</span>
          </h2>

          <ul className="stacked">
            {members.map(
              ({
                node: {
                  childMdx: { frontmatter },
                },
              }: {
                node: any
              }) => {
                const image = images.find(i => i.node.name === frontmatter.id)
                if (image) {
                  return (
                    <li key={frontmatter.id}>
                      <h3>{frontmatter.name}</h3>
                      <Img
                        fluid={{
                          ...image.node.childImageSharp.fluid,
                          aspectRatio: 3 / 4,
                        }}
                      />
                    </li>
                  )
                }
              }
            )}
          </ul>
        </aside>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    teamMembers: allFile(filter: { sourceInstanceName: { eq: "team" } }) {
      edges {
        node {
          childMdx {
            frontmatter {
              id
              name
            }
          }
        }
      }
    }
    teamMemberImages: allFile(
      filter: { sourceInstanceName: { eq: "team-images" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
