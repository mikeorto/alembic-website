import React from "react"
import WhyAlembicContent from "../content/main/why-alembic.mdx"
import WhatWeDoContent from "../content/main/what-we-do.mdx"
import CallToAction from "../components/call-to-action"
import { Link } from "gatsby";

export default () => (
  <>
    <div className="what-we-do wrap">
      <aside className="stacked">
        <WhyAlembicContent />
      </aside>

    </div>
    <div className="what-we-do wrap">
      <aside className="stacked">
        <WhatWeDoContent />
      </aside>
    </div>
  </>
)
