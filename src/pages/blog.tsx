import React from "react"
import PostLink from "../components/post-link"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Article from "../components/article"
import Helmet from "react-helmet"
export default ({
  data: {
    allFile: { edges },
  },
}: {
  data: any
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <Article>
        {edges
          .filter(edge => !!edge.node.modifiedTime)
          .map(edge => (
            <PostLink key={edge.node.id} post={edge.node} />
          ))}
      </Article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      edges {
        node {
          childMdx {
            excerpt
            frontmatter {
              title
              author
              path
            }
          }
          modifiedTime(formatString: "Do MMMM YYYY")
        }
      }
    }
  }
`
