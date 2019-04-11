import React from "react"
import Head from "../components/head"

import "../App.scss"
import WhatWeDo from "../components/what-we-do"
import HowWeDoIt from "../components/how-we-do-it"
import ElixirCallout from "../components/elixir-callout"
import GraphQLCallout from "../components/graphql-callout"
import ReactCallout from "../components/react-callout"
import Footer from "../components/footer"
import ContactForm from "../components/contact-form"

export default () => (
  <div className="homepage">
    <Head />
    <WhatWeDo />
    <HowWeDoIt />
    <ElixirCallout />
    <GraphQLCallout />
    <ReactCallout />
    <ContactForm />
    <Footer />
  </div>
)