import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import { useStaticQuery, graphql } from "gatsby"

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiHomepage {
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

  const { heroBackground, websiteAuthorCaption } = data.strapiHomepage

  const backgroundImgSrc = heroBackground.childImageSharp.fluid

  return (
    <BackgroundImage Tag="section" fluid={backgroundImgSrc}>
      <Wrapper>
        <Title>
          Fotografia Hobbystyczna <span>{websiteAuthorCaption}</span>
        </Title>
      </Wrapper>
    </BackgroundImage>
  )
}

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.1) 76%
    );
  }

  * {
    z-index: 3;
  }
`

const Title = styled.h1`
  color: ${props => props.theme.white};
  text-align: center;
  font-family: ${props => props.theme.fontAccentTwo};
  font-weight: 200;
  text-transform: uppercase;
  font-size: 3.5rem;
  line-height: 1.7;
  letter-spacing: 6px;

  span {
    letter-spacing: 4px;
    margin-top: 15px;
    text-transform: none;
    display: block;
    font-family: ${props => props.theme.fontAccent};
    font-weight: 400;
    font-size: 1em;
  }
`
