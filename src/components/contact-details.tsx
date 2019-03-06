import React from "react"

export default () => (
  <div className="contact-details">
    <div className="wrap">
      <article>
        <h1>Contact Us</h1>
        <h2>
          Get in touch with us to discuss your software engineering needs.
          We'd absolutely love to talk.
        </h2>

        <p className="phone">
          <a href="tel:1300253624" className="btn btn-primary">
            Call us on 1300 253 624
          </a>
        </p>

        <p>
          Or, you can also get in touch{" "}
          <a href="mailto:hello@alembic.com.au">via email</a>
        </p>
      </article>
    </div>
  </div>
)
