import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export const ImageComposition = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiHomepage {
        aboutUsPhotoOne {
          childImageSharp {
            fluid(maxWidth: 600)
          }
        }
        aboutUsPhotoTwo {
          childImageSharp {
            fluid(maxWidth: 600)
          }
        }
        aboutUsPhotoTree {
          childImageSharp {
            fluid(maxWidth: 600)
          }
        }
      }
    }
  `)

  return <div></div>
}
