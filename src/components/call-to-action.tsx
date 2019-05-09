import React from "react"
import { Link } from "gatsby";

export default ({action, link}:{action: string, link: string}) => (
    <Link to={link} className="btn btn-primary">
        {action}
    </Link>
)
