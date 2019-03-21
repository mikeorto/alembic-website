import React from "react"
import { slide as Menu } from "react-burger-menu"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default () => {
  const { menulinks } = useSiteMetadata()
  return (
    <div>
      <Menu right width={"45%"}>
        <main>
          <ul className="bm-item-list">
            {menulinks.map((menulink: any) => (
              <li key={menulink.name}>
                <a id="case-studies" className="menu-item" href={menulink.link}>
                  {menulink.name}
                </a>
              </li>
            ))}
          </ul>
        </main>
      </Menu>
    </div>
  )
}
