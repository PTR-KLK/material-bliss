import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="bliss">
      <div className="mountain"></div>
      <div className="hill-1"></div>
    </section>
    <section id="about"></section>
  </Layout>
)

export default IndexPage
