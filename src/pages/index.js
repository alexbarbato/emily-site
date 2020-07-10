import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>Here we go</h1>

    <form name="contact" method="POST" data-netlify="true">
      <label for="name">Name:
        <input id="name" name="name" type="text"/>
      </label>
      <label for="phone">Enter your phone number:
        <input id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
      </label>
      <label for="email">Or enter your email:
        <input id="email" name="email" type="email"/>
      </label>

      <button type="submit">Submit</button>
    </form>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
