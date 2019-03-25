import React from "react"

export default () => (
  <div className="form">
    <form name="contact" method="POST" data-netlify="true">
      <h1>Have a project in mind?</h1>
      <div className="enquiry">
        <p>What is your name?</p>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" />
        <p>What email address do you use?</p>
        <input type="text" name="email" />
        <p>
          What is your companies name? <span>(optional)</span>
        </p>
        <input type="text" name="company" />
        <p>
          What is your phone number?<span>(optional)</span>
        </p>
        <input type="text" name="phone" />
        <p>What is your budget?</p>
        <select name="budget" placeholder="Select one..">
          <option value="Less than $10,000" selected>
            Less than $10,000
          </option>
          <option value="$10,000 - $50,000">$10,000 - $50,000</option>
          <option value="$50,000 - $100,000">$50,000 - $100,000</option>
          <option value="$100,000 - $250,000">$100,000 - $250,000</option>
          <option value="$250,000 - $500,000">$250,000 - $500,000</option>
          <option value="More than $500,000">More than $500,000</option>
        </select>
        <p>How can we help?</p>
        <textarea />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
)
