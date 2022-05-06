import * as React from "react"
import { AboutMe } from "../components/AboutMe"
import { Experience } from "../components/Experience"
import { Hero } from "../components/Hero"

import Layout from "../components/layout"
import { Projects } from "../components/Projects"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/*<Seo title="Home" />*/}
    <section>
      <Hero />
    </section>
    <section>
      <h1 id="about" className="text-4xl mb-3">
        About Me
      </h1>
      <AboutMe />
    </section>
    <section className="home__section">
      <h1 id="experience" className="text-4xl mb-3">
        Where I've Worked
      </h1>
      <Experience />
    </section>
    <section className="home__section">
      <h1 id="works" className="text-4xl mb-3">
        Some of My Projects
      </h1>
      <Projects />
    </section>
  </Layout>
)

export default IndexPage
