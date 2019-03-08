import React, { ReactNode } from "react"
import PrimaryHeader from "../primary-header"
import Head from "../../components/head"
import Footer from "../footer"
import "../../App.scss"

export default ({ name, children }: { name: string; children: ReactNode }) => (
  <div className={name}>
    <Head />
    <PrimaryHeader internal={true} />
    <div className="wrap">{children}</div>
    <Footer />
  </div>
)
