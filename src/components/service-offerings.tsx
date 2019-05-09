import React from "react"
import ServiceOfferingsContent from "../content/main/service-offerings.mdx"

export default () => (
  <div id="what-we-do" className="what-we-do wrap">
    <aside className="stacked">
      <ServiceOfferingsContent />
      <div className="phone" >
        <a href="/contact" className="btn btn-primary">
          Get in touch!
        </a>
      </div>
    </aside>
  </div>
)
