import React, { ReactNode } from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import Layout from "../../components/layout/layout"
import Article from "../../components/article"
import Helmet from "react-helmet"

import "../../App.scss"

export default ({
  data: {
    mdx: { code, frontmatter },
  },
}: {
  data: any
}) => (
  <Layout>
    <Helmet>
      <title>{frontmatter.title}</title>
    </Helmet>
    <Article>
      <h1>{frontmatter.title}</h1>
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
