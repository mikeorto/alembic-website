import React from "react"
import { Link } from "gatsby"

export default ({ post }: { post: any }) => (
  <div className="wrap">
    <Link to={post.frontmatter.path}>
      <h1>
        {post.frontmatter.title} ({post.frontmatter.date})<p>{post.excerpt}</p>
      </h1>
    </Link>
  </div>
)
