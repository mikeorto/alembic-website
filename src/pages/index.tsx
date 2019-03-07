import React from "react"
import Hero from "../components/hero"
import "../App.scss"
import WhatWeDo from "../components/what-we-do"
import HowWeDoIt from "../components/how-we-do-it"
import ElixirCallout from "../components/elixir-callout"
import GraphQLCallout from "../components/graphql-callout"
import ReactCallout from "../components/react-callout"
import Footer from "../components/footer"

export default () => (
  <div className="homepage">
    <Hero />

    <WhatWeDo />
    <HowWeDoIt />
    <ElixirCallout />
    <GraphQLCallout />
    <ReactCallout />

    <Footer />
  </div>
)
