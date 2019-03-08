import React from "react"
import Layout from "../../components/layout/layout"
import Article from "../../components/article"
import Suncorp from "../../content/case-studies/suncorp.mdx";

import "../../App.scss"

export default () => (
  <Layout>
    <Article>
      <Suncorp />
    </Article>
  </Layout>
)
