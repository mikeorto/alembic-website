import React from "react"
import { Link } from "gatsby"

export default ({ post }: { post: any }) => (
  <div className="wrap">
    <Link to={post.frontmatter.path}>
      <h2>
        {post.frontmatter.title} 
      </h2>
        <p>{post.excerpt}</p>
      <p>
        By {post.frontmatter.author} &emsp;
        <em>{post.frontmatter.date}</em>
      </p>
    </Link>
  </div>
)
