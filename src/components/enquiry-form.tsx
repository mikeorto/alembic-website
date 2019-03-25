import React from "react"

export default () => (
  <div className="form enquiry">
    <form name="project" method="POST" data-netlify="true">
      <h1>Have a project in mind?</h1>
      <input type="hidden" name="form-name" value="project" />
      <label htmlFor="name">Full Name</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">Best email address</label>
      <input type="text" id="email" name="email" />
      <label htmlFor="phone">Best phone number</label>
      <input type="text" id="phone" name="phone" />
      <label htmlFor="budget">Do you have a budget in mind?</label>
      <select id="budget" name="budget" placeholder="Select one">
        <option value="Less than $10,000" selected>
          Less than $10,000
        </option>
        <option value="$10,000 - $50,000">$10,000 - $50,000</option>
        <option value="$50,000 - $100,000">$50,000 - $100,000</option>
        <option value="$100,000 - $250,000">$100,000 - $250,000</option>
        <option value="More than $250,000">More than $250,000</option>
      </select>
      <label htmlFor="description">How can we help?</label>
      <textarea id="description" name="description" />
      <button className="btn btn-primary" type="submit">
        Work with us
      </button>
    </form>
  </div>
)
