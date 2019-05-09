import React from "react"
import ServiceOfferingsContent from "../content/main/service-offerings.mdx"
import CallToAction from "../components/call-to-action"

export default () => (
  <div id="what-we-do" className="what-we-do wrap">
    <aside className="stacked">
      <ServiceOfferingsContent />
      <CallToAction action="Get in touch!" link="/contact"/>
    </aside>
  </div>
)
