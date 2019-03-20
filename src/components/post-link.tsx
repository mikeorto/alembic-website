import React from "react"
import { Link } from "gatsby"

export default ({ post }: { post: any }) => (
  <div className="wrap">
    <Link to={post.childMdx.frontmatter.path}>
      <h2>
        {post.childMdx.frontmatter.title} 
      </h2>
        <p>{post.childMdx.excerpt}</p>
      <p>
        By {post.childMdx.frontmatter.author} &emsp;
        <em>{post.modifiedTime}</em>
      </p>
      {/* <hr /> */}
    </Link>
  </div>
)
