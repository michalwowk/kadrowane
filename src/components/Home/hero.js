import React from "react"
import styled from "styled-components"

import heroBg from "src/images/backgrounds/hero-background.jpg"
import Logo from "src/images/icons/kadrowane-logo.svg"

const Title = styled.h1`
  color: ${props => props.theme.white};
  text-transform: uppercase;
  display: flex;
  align-items: center;
`

const Wrapper = styled.section`
  background-image: linear-gradient(
      to bottom,
      ${props => props.theme.black},
      transparent
    ),
    url(${heroBg});
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;

  svg {
    margin-left: 20px;
    margin-right: 20px;
  }
`

const StyledSVG = styled(Logo)`
  width: 100px;

  .body {
    stroke: ${props => props.theme.black};
    fill: transparent;
    stroke-width: 15px;
  }

  .body {
    stroke-dasharray: 10000;
    stroke-dashoffset: 10000;
    animation: dash 15s linear forwards;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`

export const Hero = () => {
  return (
    <Wrapper>
      <Title>
        lorem <StyledSVG /> ipsum
      </Title>
    </Wrapper>
  )
}
