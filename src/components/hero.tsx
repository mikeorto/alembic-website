import React from "react"
import PrimaryHeader from "./primary-header"
import HeroCallout from "../content/main/hero.mdx"

export default () => (
  <div className="hero">
    <PrimaryHeader />
    <div className="wrap">
      <article>
        <HeroCallout />
      </article>
    </div>
  </div>
)
