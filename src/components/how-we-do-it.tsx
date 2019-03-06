import React from "react"
import diagram from "../assets/images/diagram.svg"

import elixir from "../assets/images/elixir.svg"
import graphql from "../assets/images/graphql.svg"
import react from "../assets/images/react.svg"

export default props => (
  <div className="how-we-do-it wrap">
    <aside>
      <h2 className="line">
        <span>How we do it</span>
      </h2>

      <img className="diagram" src={diagram} alt="" width="999" height="255" />

      <div className="mobile-diagram">
        <img src={elixir} alt="Elixir" width="125" height="215" />
        <img src={graphql} alt="GraphQL" width="148" height="215" />
        <img src={react} alt="React" width="140" height="215" />
      </div>
    </aside>
  </div>
)
