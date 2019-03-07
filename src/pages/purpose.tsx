import React from "react"
import Layout from "../components/layout/layout"
import Article from "../components/article"
import PurposeContent from "../content/purpose.mdx"

import "../App.scss"

export default () => (
  <Layout name="purpose">
    <Article>
      <PurposeContent />
    </Article>
  </Layout>
)
