import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import AboutMe from "../Container/AboutMe"

export default () => (
  <Layout>
    <SEO
      title="YO"
      description="Hi, My name is Sergio Lazaro and I’m a web designer and developer."
    />
    <AboutMe />
  </Layout>
)
