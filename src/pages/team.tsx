import React, { ReactNode } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout/layout"
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
      <div className="team">
        <h2>Alembic Team</h2>
        <ul>
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
                    <Img fluid={image.node.childImageSharp.fluid} />
                  </li>
                )
              }
            }
          )}
        </ul>
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
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
