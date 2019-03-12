import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout/layout"
import "../App.scss"

export default ({ data }: { data: Object }) => {
  const members = Object.values(data)
  return (
    <Layout>
      <div className="team">
        <h2>Alembic Team</h2>
        <ul>
          {members.map(member => (
            <li>
              <Img
                fluid={member.childImageSharp.fluid}
              />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    will: file(relativePath: { eq: "will.jpg" }) {
      ...fluidImage
    }
    ryan: file(relativePath: { eq: "ryan.jpg" }) {
      ...fluidImage
    }
    esdras: file(relativePath: { eq: "esdras.jpg" }) {
      ...fluidImage
    }
  }
`

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`
