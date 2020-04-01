import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import { Logo } from "src/components/Logo.js"

import heroBg from "src/images/backgrounds/hero-background.jpg"
import AuthorName from "src/images/icons/Author.svg"
import { useStaticQuery, graphql } from "gatsby"

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiHomepage {
        heroLogo {
          publicURL
        }
        heroBackground {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        websiteAuthorCaption
      }
    }
  `)

  const { heroLogo, heroBackground, websiteAuthorCaption } = data.strapiHomepage

  const backgroundImgSrc = heroBackground.childImageSharp.fluid
  const logoImgSrc = heroLogo.publicURL

  return (
    <BackgroundImage Tag="section" fluid={backgroundImgSrc}>
      <Wrapper>
        <Logo maxWidth="420" imgSrc={logoImgSrc} />
        <h3>{websiteAuthorCaption}</h3>
      </Wrapper>
    </BackgroundImage>
  )
}

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow-x: hidden;
  position: relative;

  svg {
    margin-left: 20px;
    margin-right: 20px;
  }

  ::after {
    content: "";
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      transparent
    );
  }
`
