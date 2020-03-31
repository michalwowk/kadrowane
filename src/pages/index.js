import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../components/Home/hero"
import { About } from "../components/Home/about"
import { Cards } from "src/components/Home/Cards"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Cards />
  </Layout>
)

export default IndexPage
