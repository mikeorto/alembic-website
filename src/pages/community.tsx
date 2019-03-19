import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"

import "../App.scss"

export default ({ data }: { data: any }) => {
  return (
    <Layout>
      <div className="case-studies">
        <h2>Community Involvement</h2>
        <ul>
          {data.allFile.edges.map((edge: any, index: number) => (
            <li key={index}>
              <a href={edge.node.childMdx.frontmatter.url}>
                <h3>{edge.node.childMdx.frontmatter.title}</h3>
              </a>
              <p>{edge.node.childMdx.frontmatter.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "community" } }) {
      edges {
        node {
          childMdx {
            frontmatter {
              title
              url
              description
            }
          }
        }
      }
    }
  }
`
