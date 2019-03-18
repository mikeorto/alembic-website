import React from "react"
import { slide as Menu } from "react-burger-menu"

export default () => (
  <div>
    <Menu right width={"45%"} noOverlay>
      <main>
        <ul className="bm-item-list">
          <li>
            <a id="home" className="menu-item" href="/">
              Home
            </a>
          </li>
          <li>
            <a id="case-studies" className="menu-item" href="/case-studies">
              Case Studies
            </a>
          </li>
          <li>
            <a id="careers" className="menu-item" href="/careers">
              Careers
            </a>
          </li>
          <li>
            <a id="purpose" className="menu-item" href="/purpose">
              Purpose
            </a>
          </li>
          <li>
            <a id="team" className="menu-item" href="/team">
              Team
            </a>
          </li>
          <li>
            <a id="community" className="menu-item" href="/community">
              Community
            </a>
          </li>
          <li>
            <a id="Contact" className="menu-item" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </main>
    </Menu>
  </div>
)
