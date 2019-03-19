import React from "react"
import { Link } from "gatsby"
import logo from "../assets/images/alembic-logo.svg"
import classname from "classnames"
import BurgerMenu from "../components/burger-menu"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default ({ internal }: { internal?: boolean }) => {
  const { menulinks } = useSiteMetadata()
  const divStyle = classname({
    internal,
    "primary-header": true,
  })

  return (
    <div className={divStyle}>
      <div className="wrap">
        <Link to="/">
          <img src={logo} alt="Alembic Pty Ltd" width="162" height="24" />
        </Link>

        <nav>
          <ul>
            {menulinks.map((menulink: any) => (
              <li key={menulink.name}>
                <Link to={menulink.link}>{menulink.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <BurgerMenu />
      </div>
    </div>
  )
}
