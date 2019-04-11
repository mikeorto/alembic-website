import React from "react"
import Hero from "../components/hero"
import Head from "../components/head"

import "../App.scss"
import ServiceOfferings from "../components/service-offerings"
import Footer from "../components/footer"
import ContactForm from "../components/contact-form"

export default () => (
  <div className="homepage">
    <Head />
    <Hero />
    <ServiceOfferings />
    <ContactForm />
    <div className="wrap" style={{ padding: "40px 80px" }}>
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
