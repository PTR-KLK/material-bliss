import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="bliss">
      <p className="text-1">Do you know this peaceful landscape?</p>
      <div className="mountain"></div>
      <div className="hill-1">
        <p className="text-2">
          I know it's a little paper-like, but these colors...
        </p>
      </div>
    </section>
    <section id="about">
      <a href="#about">
        <p className="text-3">You still don't remember?</p>
      </a>
      <div className="refresher">
        <p>Here's a refresher:</p>
        <a
          href="https://en.wikipedia.org/wiki/Bliss_(image)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bliss (image)
        </a>
      </div>
    </section>
  </Layout>
)

export default IndexPage
