import React, { ReactNode } from "react"

export default ({ children }: { children: ReactNode }) => (
  <article className="article">{children}</article>
)
