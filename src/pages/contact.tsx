import React from "react"
import PrimaryHeader from "../components/primary-header"
import ContactDetails from "../components/contact-details"
import Footer from "../components/footer"
import "../App.scss"


export default () => (
  <div className="contact">
    <PrimaryHeader internal={true} />
    <ContactDetails />
    <Footer />
  </div>
)
