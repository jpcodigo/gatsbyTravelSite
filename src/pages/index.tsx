import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips />
  </Layout>
)

export default IndexPage
