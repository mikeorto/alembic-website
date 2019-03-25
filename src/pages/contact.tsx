import React from "react"
import ContactDetails from "../components/contact-details"
import Layout from "../components/layout/layout"
import EnquiryForm from "../components/enquiry-form"
import Helmet from "react-helmet"
import "../App.scss"

export default () => (
  <Layout name="contact">
    <Helmet>
      <title>Contact Us</title>
    </Helmet>
    <ContactDetails />
    <EnquiryForm />
  </Layout>
)
