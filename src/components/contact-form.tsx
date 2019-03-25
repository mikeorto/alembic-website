import React from "react"

export default () => (
  <div className="form">
    <form name="contact" action="/contact" method="POST" data-netlify="true">
      <h2>Subscribe to our newsletter</h2>
      <input type="email" name="email" placeholder="your.name@example.com" />
      <button className="btn btn-primary" type="submit">
        Subscribe
      </button>
    </form>
  </div>
)
