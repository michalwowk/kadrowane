import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../components/Home/hero"
import { About } from "../components/Home/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
  </Layout>
)

export default IndexPage
