import React from "react";
import PrimaryHeader from "../components/primary-header";
import Article from "../components/article";
import Footer from "../components/footer";

export default () => (
  <div className="careers">
    <PrimaryHeader internal />

    <div className="wrap">
      <Article>
        <h1>We're hiring</h1>
        <p>
          At Alembic we’re building a team of people who love learning and are
          enthusiastic about the latest technologies whilst focussing on solving
          real world problems for our clients. We choose technologies such as
          Elixir, React and GraphQL because we understand they can solve
          problems faster and more effectively for our clients, as well as
          providing a more enjoyable, productive environment to build software.
        </p>
        <p>
          We believe in building high quality, maintainable software with test
          driven development, code reviews and refactoring baked into the way we
          do things. For a consulting company you’ll be surprised at how remote
          friendly we are. Whilst visiting the client site will be needed, we
          are happy to have the hard conversations about you working remotely on
          a regular basis. We have a strong reputation in the industry and our
          work mostly comes from referrals with clients ranging from startups to
          large corporates looking to innovate.
        </p>
        <h2>Who are we looking for</h2>
        <h3>Developers</h3>
        <p>
          We are looking for Developers of all levels to work with us, ideally
          on a permanent basis. Experience with Elixir, React and GraphQL would
          be great, as this is predominantly our tech stack, although experience
          in other languages and a love for functional programming and test
          driven development would also be interesting to us.
        </p>
        <h3>Lead Technical Consultant</h3>
        <p>
          As well as seeking developers to work on our project work, we are also
          looking for Lead Technical Consultants who will be able to work
          closely with our clients and be the principal contact for our client
          and be the main point of contact when they have any queries on
          delivery, as well as supporting the developers in the team and
          mentoring them as needed.
        </p>
        <p>
          As well as having similar tech skills to those we’ve mentioned above
          we would want you to display the following skills:
        </p>
        <ul>
          <li>
            Demonstrating the ability to lead a team of Alembic developers
          </li>
          <li>Solid technical/product delivery capability</li>
          <li>Ability to mentor other developers</li>
          <li>
            Feel comfortable starting a project in the “discovery” stage and
            assisting clients with driving requirements
          </li>
          <li>
            Strong independence as well as the ability to work collaboratively
            on projects with the team.
          </li>
        </ul>
        <p>
          Our consultants enjoy working together collaboratively on a variety of
          different technical challenges within a wide range of different
          business domains, whilst working on a tech stack they really enjoy.
        </p>
        <h2>Technologies</h2>
        <p>
          We're currently working with clients to deliver products/applications
          in the following technologies/methodologies and would love your help:
          Elixir, GraphQL, React, React Native, NodeJS, TypeScript, Functional
          programming, TDD, Continuous Delivery, DevOps, AWS, Azure, GCP,
          Kubernetes.
        </p>
        <h2>Interested?</h2>
        <p>
          Why not email work@alembic.com.au with a cover letter and résumé and
          expect to hear from us!
        </p>
        <h2>Who we are</h2>
        <p>
          <a href="https://www.alembic.com.au">Alembic</a> are a niche
          consulting company established in early 2017 and we provide tailored,
          end-to-end services in software development and delivery. We work with
          a variety of companies from small start-ups to large corporate clients
          with an interest in innovation and how it can help their business. We
          support diversity initiatives and are big supporters of developing
          community within our industry. We help to organise and are highly
          involved in the Elixir Sydney &amp; GraphQL Sydney meetups, Elixir
          Girls events and Elixir Camp. Our technical founders are Josh Price
          and James Sadler, who are both involved in helping to build an
          inclusive and supportive technical community.
        </p>
      </Article>
    {/* <Footer /> */}
    </div>
  </div>
);
