import React from "react"
import Layout from "../components/layout/layout"
import Article from "../components/article"
import CareersContent from "../content/careers.mdx"
import "../App.scss"

export default () => (
  <Layout name="careers">
    <Article>
      <CareersContent />
    </Article>
  </Layout>
)
