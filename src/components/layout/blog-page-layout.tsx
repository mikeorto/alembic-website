import React, { ReactNode } from "react"
import PrimaryHeader from "../primary-header"
import Head from "../../components/head"
import Footer from "../footer"
import "../../App.scss"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"

export default ({ data: { mdx } }: { data: any }) => (
  <div>
  <Head />
    <PrimaryHeader internal={true} />
    <div className="case-studies wrap">
      <h2>{mdx.frontmatter.title}</h2>
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </div>
    <Footer />
  </div>
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
