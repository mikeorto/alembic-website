import React from "react"
import Layout from "../components/layout/layout"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import EnquiryForm from "../components/enquiry-form"

import scentregroup from "../assets/images/case-studies/scentregroup.svg"
import suncorp from "../assets/images/case-studies/suncorp.svg"
import woolworths from "../assets/images/case-studies/woolworths.svg"
import classSolver from "../assets/images/case-studies/classsolver.svg"
import expert360 from "../assets/images/case-studies/expert360.svg"
import tyro from "../assets/images/case-studies/tyro.svg"
import svenskaAlarm from "../assets/images/case-studies/svenska-alarm-text.svg"
import tappon from "../assets/images/case-studies/tappon.png"
import laava from "../assets/images/case-studies/laava.svg"
import enablehr from "../assets/images/case-studies/enablehr.svg"

import "../App.scss"

export default () => (
  <Layout>
    <Helmet>
      <title>Our Customers</title>
    </Helmet>
    <div className="case-studies wrap">
      <aside>
        <h2 className="line">
          <span>Our Work</span>
        </h2>

        <ul>
          <li>
            <h3>
              <img
                width="220px"
                height="40px"
                alt="Scentre Group logo"
                src={scentregroup}
              />
              <p>
                Scentre Group needed a better way to sell Digital Out of Home
                advertising campaigns. Westfield shopping centres have a network
                of 1000s of smart screens delivering premium ads to discerning
                customers. We helped design and build a tool which enables
                highly targeted screen selection to suit the campaign goals.
              </p>
            </h3>
          </li>
          <li>
            <h3>
              <img height="40px" alt="Woolworths logo" src={woolworths} />
              <p>
                WooliesX engaged Alembic to build a fleet management system for
                provisioning drivers to deliver Express Delivery orders to
                customers within an hour. We built a event-sourced system in
                Elixir which connected to multiple driver APIs to ensure that
                the delivery was picked up at exactly the right time.
              </p>
            </h3>
          </li>
          <li>
            <h3>
              <img height="40px" alt="Suncorp logo" src={suncorp} />
              <p>
                Suncorp integrated all of its banking and insurance services
                into one single marketplace. To do this required coordinating
                APIs across all of their business units. Alembic helped the
                Architecture team realise this vision with some bespoke tooling
                for making API integration simpler.
              </p>
              <br />
              <Link className="btn btn-secondary" to="/case-studies/suncorp">
                Case Study
              </Link>
            </h3>
          </li>
          <li>
            <h3>
              <img height="40px" alt="Class Solver logo" src={classSolver} />
              <p>
                Alembic delivered an MVP SaaS product for placing students into
                classes given specified constraints. Schools all around the
                world are using Class Solver to quickly create the perfect
                classes for their students.
              </p>
            </h3>
          </li>
          <li>
            <h3>
              <img height="40px" alt="Tyro logo" src={tyro} />
              <p>
                Alembic provided technical Due Diligence services to ensure both
                software and process quality of a potential acquisition.
              </p>
            </h3>
          </li>
          <li>
            <h3>
              <img height="40px" alt="Svenska Alarm logo" src={svenskaAlarm} />
              <p>
                Svenska Alarm needed a new mobile application to provide alarm
                customers with real-time remote control over their alarm
                systems. We leveraged the robustness of Elixir to manage the
                real-time nature of the alerts.
              </p>
            </h3>
          </li>
          {/* <li>
          <h3>
            <img height="40px" alt="TappOn logo" src={tappon} />
            <p>
              We built a 2 sided marketplace for disability workers in a matter
              of weeks.
            </p>
          </h3>
        </li> */}
          {/* <li>
          <h3>
            <img height="40px" alt="Laava logo" src={laava} />
            <p>
            </p>
          </h3>
        </li> */}
          <li>
            <h3>
              <img height="40px" alt="Expert360 logo" src={expert360} />
              <p>
                Alembic provided architectural strategy and support as well as
                training around Elixir and GraphQL.
              </p>
            </h3>
          </li>
          <li>
            <h3>
              <img height="40px" alt="Enable HR logo" src={enablehr} />
              <p>
                Alembic provided bespoke in-house training for internal teams
                wanting to get up to speed quickly with GraphQL.
              </p>
            </h3>
          </li>
        </ul>
      </aside>
    </div>
    <EnquiryForm />
  </Layout>
)
