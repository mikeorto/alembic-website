import React from "react"
import { Link } from "gatsby"

import scentregroup from "../assets/images/case-studies/scentregroup.svg"
import suncorp from "../assets/images/case-studies/suncorp.svg"
import woolworths from "../assets/images/case-studies/woolworths.svg"
import classSolver from "../assets/images/case-studies/classsolver.svg"
import expert360 from "../assets/images/case-studies/expert360.svg"
import tyro from "../assets/images/case-studies/tyro.svg"
import svenskaAlarm from "../assets/images/case-studies/svenska-alarm-text.svg"
import tappon from "../assets/images/case-studies/tappon.png"
import laava from "../assets/images/case-studies/laava.svg"

export default () => (
  <div
    id="clients"
    className="what-we-do wrap form"
    style={{
      backgroundColor: "#f3f3f3",
    }}>
    <aside>
      <h2 className="line">
        <span style={{ backgroundColor: "#f3f3f3", fontWeight: "700" }}>
          Clients We Love
        </span>
      </h2>
      <ul
        className="stacked"
        style={{
          filter: "saturate(0%) contrast(50%)",
          marginLeft: "50px",
        }}>
        <li>
          <img
            width="220px"
            height="40px"
            alt="Scentre Group logo"
            src={scentregroup}
          />
        </li>
        <li>
          <img height="40px" alt="Suncorp logo" src={suncorp} />
        </li>
        <li>
          <img height="40px" alt="Woolworths logo" src={woolworths} />
        </li>
        <li>
          <img height="40px" alt="Tyro logo" src={tyro} />
        </li>
        <li>
          <img height="40px" alt="Expert360 logo" src={expert360} />
        </li>
        <li>
          <img height="40px" alt="Class Solver logo" src={classSolver} />
        </li>
        <li>
          <img height="40px" alt="Svenska Alarm logo" src={svenskaAlarm} />
        </li>
        <li>
          <img height="40px" alt="Laava logo" src={laava} />
        </li>
        <li>
          <img height="40px" alt="TappOn logo" src={tappon} />
        </li>
      </ul>
      <Link
        to="/work"
        className="btn btn-secondary"
        style={{ margin: "0 auto", width: "250px" }}>
        Find out more
      </Link>
    </aside>
  </div>
)
