import React from "react"
import Layout from "../components/layout/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import "../App.scss"

export default ({
  data: {
    caseStudies: { edges: members },
    caseStudyImages: { edges: images },
  },
}: {
  data: any
}) => (
  <Layout>
    <div className="case-studies">
      <h2>Our Work</h2>
      <ul>
        {members.map((member: any) => {
          const image = images.find(
            i => i.node.name === member.node.childMdx.frontmatter.id
          )
          return (
            <li key={member.node.childMdx.frontmatter.id}>
              <h3>
                <Link to="/case-studies/suncorp">
                  <Img fixed={image.node.childImageSharp.fixed} />
                  <p>{member.node.childMdx.frontmatter.title}</p>
                </Link>
              </h3>
            </li>
          )
        })}
      </ul>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query {
    caseStudies: allFile(
      filter: { sourceInstanceName: { eq: "case-studies" } }
    ) {
      edges {
        node {
          childMdx {
            frontmatter {
              id
              name
              title
            }
          }
        }
      }
    }
    caseStudyImages: allFile(
      filter: { sourceInstanceName: { eq: "case-study-images" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 179) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`
