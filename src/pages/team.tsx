import React, { ReactNode } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout/layout"
import "../App.scss"

export default ({
  data: {
    allTeamYaml: { edges: members },
    allFile: { edges: images },
  },
}: { data: any}) => {
  return (
    <Layout>
      <div className="team">
        <h2>Alembic Team</h2>
        <ul>
          {members.map((member: any, index: number) => {
            const image = images.find(i => i.node.name === member.node.id)
            return (
              <li key={index}>
                <h3>{member.node.name}</h3>
                {image ? (
                  <Img fluid={image.node.childImageSharp.fluid} key={index} />
                ) : null}
                <h3>Bio:</h3>
                <h4>{member.node.bio}</h4>
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
    allTeamYaml {
      edges {
        node {
          id
          name
          bio
        }
      }
    }
    allFile {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
