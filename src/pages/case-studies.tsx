import React from "react"
import Layout from "../components/layout/layout"
import { Link } from "gatsby"
import suncorp from "../assets/images/suncorp-logo.png"

import "../App.scss"

export default () => (
  <Layout>
    <div className="case-studies">
      <h2>Case Studies</h2>
      <ul>
        <li>
          <h3>
            <Link to="/case-studies/suncorp">
              <img src={suncorp} alt="Suncorp" width="125" height="auto" />
              <p>GraphQL API Strategy and Implementation</p>
            </Link>
          </h3>
        </li>
      </ul>
    </div>
  </Layout>
)
