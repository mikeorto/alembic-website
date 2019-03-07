import React from "react"
import PrimaryHeader from "../primary-header"
import Article from "../article"
import Footer from "../footer"
import "../../App.scss"

export default ({ name, children }: { name: string, children: any }) => (
  <div className={name}>
    <PrimaryHeader internal={true} />
    <div className="wrap">
      <Article>{children}</Article>
    </div>
    <Footer />
  </div>
)
