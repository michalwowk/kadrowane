import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../components/Home/Hero"
import { About } from "../components/Home/about"
import { Cards } from "src/components/Home/Cards"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const { featuresColumns, hero, aboutMe } = data.allWordpressPage.nodes[0].acf
  return (
    <Layout>
      <SEO title="Home" />
      <Hero {...hero} />
      <About {...aboutMe} />
      <Cards {...featuresColumns} />
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allWordpressPage {
      nodes {
        title
        acf {
          featuresColumns {
            title
          }
          hero {
            logo {
              localFile {
                childImageSharp {
                  fixed(width: 450, height: 80) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            backgroundImages {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            leftSidetitle
            leftSidetext
            middleText
            rightSideTitle
            rightSidetext
          }
          featuresColumns {
            title
            column {
              text
              title
              image {
                localFile {
                  childImageSharp {
                    fluid
                  }
                }
              }
            }
          }
          aboutMe {
            title
            content
          }
        }
      }
    }
  }
`

export default IndexPage
