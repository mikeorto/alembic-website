import React from "react"

export default () => (
  <div className="form">
    <form name="contact" method="POST" data-netlify="true">
      <label htmlFor="email">
        <h2>Subscribe to our newsletter</h2>
      </label>
      <input type="hidden" name="form-name" value="contact" />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="your.name@example.com"
      />
      <button className="btn btn-primary" type="submit">
        Subscribe
      </button>
    </form>
  </div>
)
