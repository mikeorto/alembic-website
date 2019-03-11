import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout/layout"
import will from "../assets/team/will.jpg"
import ryan from "../assets/team/ryan.jpg"
import esdras from "../assets/team/esdras.jpg"

import "../App.scss"

const teamMembers = [
  {
    name: "Will",
    profilePic: will,
  },
  {
    name: "Ryan",
    profilePic: ryan,
  },
  {
    name: "Esdras",
    profilePic: esdras,
  },
]

export default (props: any) => {
  const members = Object.keys(props.data)
  return (
    <Layout>
      <div className="case-studies">
        <h2>Alembic Team</h2>
        <ul>
          {members.map(member => (
            <li>
              <Img fluid={props.data[member].childImageSharp.fluid} />
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
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ryan: file(relativePath: { eq: "ryan.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    esdras: file(relativePath: { eq: "esdras.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
