import React from "react"
import WhyAlembicContent from "../content/main/why-alembic.mdx"
import WhatWeDoContent from "../content/main/what-we-do.mdx"

export default () => (
  <>
    <div className="what-we-do wrap">
      <aside>
        <WhyAlembicContent />
      </aside>
    </div>
    <div className="what-we-do wrap">
      <aside>
        <WhatWeDoContent />
      </aside>
    </div>
  </>
)
