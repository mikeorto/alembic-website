import React from "react"
import Layout from "../components/layout/layout"
import Helmet from "react-helmet"

import WhatWeDo from "../components/what-we-do"
import HowWeDoIt from "../components/how-we-do-it"
import ElixirCallout from "../components/elixir-callout"
import GraphQLCallout from "../components/graphql-callout"
import ReactCallout from "../components/react-callout"
import EnquiryForm from "../components/enquiry-form"

import "../App.scss"

export default () => (
  <Layout>
    <Helmet>
      <title>Why Alembic</title>
    </Helmet>
    <WhatWeDo />
    <HowWeDoIt />
    <ElixirCallout />
    <GraphQLCallout />
    <ReactCallout />
    <div className="form" style={{padding: "0px 110px"}}>
      <EnquiryForm />
    </div>
  </Layout>
)
