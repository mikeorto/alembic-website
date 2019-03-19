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
          {members.map((member: any) => {
            const image = images.find(
              i => i.node.name === member.node.childMdx.frontmatter.id
            )
            return (
              <li key={member.node.childMdx.frontmatter.id}>
                {image ? (
                  <div>
                    <h3>{member.node.childMdx.frontmatter.name}</h3>
                    <Img fluid={image.node.childImageSharp.fluid} />
                  </div>
                ) : null}
              </li>
            )
          })}
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
