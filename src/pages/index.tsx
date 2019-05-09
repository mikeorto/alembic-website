import React from "react"

import Hero from "../components/hero"
import Head from "../components/head"
import ServiceOfferings from "../components/service-offerings"
import Footer from "../components/footer"
import Clients from "../components/clients"
import EnquiryForm from "../components/enquiry-form"

import "../App.scss"

export default () => (
  <div className=" homepage">
    <Head />
      <Hero />
      <ServiceOfferings />
      <Clients />
    <div className="form" style={{padding: "0px 110px", }} >
      <EnquiryForm />
    </div>
    <div className="wrap" style={{ padding: "0px 80px" }}>
      <div className="contact-details">
        <article>
          <h2>
            Get in touch with us to discuss your software engineering needs.
            <br />
            <br />
            We'd absolutely love to talk.
          </h2>
          <p className="phone">
            <a href="mailto:hello@alembic.com.au" className="btn btn-primary">
              Email us now
            </a>
          </p>
        </article>
      </div>
    </div>
    <Footer />
  </div>
)
