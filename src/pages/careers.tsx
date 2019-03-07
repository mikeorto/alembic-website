import React from "react"
import PrimaryHeader from "../components/primary-header"
import Article from "../components/article"
import Footer from "../components/footer"
import CareersContent from "../content/careers.mdx"
import "../App.scss"


export default () => (
  <div className="careers">
    <PrimaryHeader internal={true} />

    <div className="wrap">
      <Article>
        <CareersContent />
      </Article>
      <Footer />
    </div>
  </div>
)
