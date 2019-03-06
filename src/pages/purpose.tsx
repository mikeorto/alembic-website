import React from "react";
import PrimaryHeader from "../components/primary-header";
import Article from "../components/article";
import Footer from "../components/footer";

export default () => (
  <div className="purpose">
    <PrimaryHeader internal />

    <div className="wrap">
      <Article>
        <h1>
          We're Alembic, and this is our{" "}
          <a href="http://slashpurpose.org">purpose</a>
        </h1>

        <p>
          We want to build software that empowers our clients and enriches the
          lives of their customers. We want to relentlessly improve ourselves,
          which in turn, helps us improve the services we offer to our clients
          and their customers.
        </p>

        <h2>Learning and Enjoyment</h2>
        <p>
          We want to ensure all people of Alembic thrive both professionally and
          personally. This includes a clear distinction between work time and
          personal time. We want to look forward to coming to work, while also
          enjoying rest and relaxation with our families.
        </p>

        <p>
          While at work, we should love the work we're doing. We need our work
          to be meaningful and to make a difference in the world around us.
        </p>

        <h2>Inclusivity</h2>
        <p>
          We want to foster an environment of inclusion and equality. We believe
          that all humans are fundamentally equal, but bring different, and
          incredible qualities to the table.
        </p>

        <h2>Quality</h2>
        <p>
          We want the software we build and design to be of very high quality.
          We define quality in terms of:
        </p>

        <ul>
          <li>Simplicity</li>
          <li>Human centred</li>
          <li>Minimalism</li>
          <li>Integrity</li>
          <li>Correctness</li>
          <li>Scalability</li>
          <li>Ease of change</li>
          <li>Accessibility</li>
          <li>Understandable</li>
          <li>Friendliness</li>
        </ul>

        <p>
          Furthermore, we strive to continuously improve software development
          for our clients. We want them to be as happy to be working with us as
          we are happy to be building software for them.
        </p>

        <h2>Trust</h2>
        <p>
          We want our colleagues to share our relentless desire to improve, our
          unquenchable curiosity, our insatiable desire for finding a better
          way. We should be open, supportive and an asset to those we work with.
          We should be each others' cheer squad.
        </p>

        <h2>Longevity</h2>
        <p>
          We want to form long-term, fruitful relationships. Success is a
          marathon, not a sprint. We strive to never betray our core values for
          short-term profit. We also want to choose the tools that last the test
          of time.
        </p>
      </Article>
    {/* <Footer /> */}
    </div>
  </div>
);
