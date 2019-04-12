import React from "react"
import Layout from "../components/layout/layout"
import Article from "../components/article"
import CareersContent from "../content/main/careers.mdx"
import PurposeContent from "../content/main/purpose.mdx"
import Helmet from "react-helmet"
import "../App.scss"

export default () => (
  <Layout name="careers">
    <Article>
      <Helmet>
        <title>Come Work With Us</title>
      </Helmet>
      <CareersContent />
      <PurposeContent />
    </Article>
  </Layout>
)
