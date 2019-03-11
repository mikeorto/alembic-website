import React from "react"
import Layout from "../components/layout/layout"
import will from "../assets/team/will.jpg"
import ryan from "../assets/team/ryan.jpg"
import esdras from "../assets/team/esdras.jpg"

import "../App.scss"

const teamMembers = [{
  name: "Will",
  profilePic: will,
}, {
  name: "Ryan",
  profilePic: ryan,
}, {
  name: "Esdras",
  profilePic: esdras,
}]

export default () => {
  return (
  <Layout>
    <div className="case-studies">
      <h2>Alembic Team</h2>
      <ul>
        {
          teamMembers.map(tm => (
            <li>
              <img src={tm.profilePic} alt="will-tan" width="125" height="auto" />
            </li>
          ))
        }
      </ul>
    </div>
  </Layout>
)
}