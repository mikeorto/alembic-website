import React from "react"
import { Link } from "gatsby"
import logo from "../assets/images/alembic-logo.svg"

export default ({ internal }: { internal?: boolean }) => {
  return (
    <div className={`primary-header ${internal ? "internal" : ""}`}>
      <div className="wrap">
        <Link to="/">
          <img src={logo} alt="Alembic Pty Ltd" width="162" height="24" />
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/case-studies">Case Studies</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/purpose">Purpose</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
