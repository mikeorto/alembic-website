import React from "react"
import ContactDetails from "../components/contact-details"
import Layout from "../components/layout/layout"
import Helmet from "react-helmet"
import "../App.scss"

export default () => (
  <Layout name="contact">
    <Helmet>
      <title>Contact Us</title>
    </Helmet>
    <ContactDetails />
  </Layout>
)
