import React, { ReactNode } from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import Layout from "../../components/layout/layout"
import Article from "../../components/article"

import "../../App.scss"

export default ({
  data: {
    mdx: { code, frontmatter },
  },
}: {
  data: any
}) => (
  <Layout>
    <Article>
      <h2>{frontmatter.title}</h2>
      <MDXRenderer>{code.body}</MDXRenderer>
    </Article>
  </Layout>
)

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`
