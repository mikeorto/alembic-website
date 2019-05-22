import React from "react"
import Layout from "../../components/layout/layout"
import Article from "../../components/article"
import Expert360 from "../../content/case-studies/expert360.mdx"

import "../../App.scss"

export default () => (
  <Layout>
    <Article>
      <Expert360 />
    </Article>
  </Layout>
)
