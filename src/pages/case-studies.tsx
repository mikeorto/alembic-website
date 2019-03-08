import React from "react"
import Layout from "../components/layout/layout"
import Article from "../components/article"
import { Link } from "gatsby"

import "../App.scss"

export default () => (
  <Layout name="purpose">
    <Article>
      <ul>
        <li>
          <Link to="/case-studies/suncorp">Suncorp</Link>
        </li>
      </ul>
    </Article>
  </Layout>
)
