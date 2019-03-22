import React from "react"
import Layout from "../components/layout/layout"
import Article from "../components/article"
import PurposeContent from "../content/main/purpose.mdx"
import Helmet from "react-helmet"
import "../App.scss"

export default () => (
  <Layout name="purpose">
    <Helmet>
      <title>Our Purpose</title>
    </Helmet>
    <Article>
      <PurposeContent />
    </Article>
  </Layout>
)
