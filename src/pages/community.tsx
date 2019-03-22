import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import "../App.scss"

export default ({ data }: { data: any }) => {
  return (
    <Layout>
      <Helmet>
        <title>Community Involvement</title>
      </Helmet>
      <div className="case-studies">
        <h2>
          Community Involvement
          <p>
            When we're not building amazing software for our clients, we're out
            helping out the community. We speak at meetups and conferences and
            love sharing the knowledge we've built up over the years. These are
            some of the things we are currently really involved in.
          </p>
        </h2>
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
