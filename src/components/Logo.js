import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StyledLogo = styled.img`
  max-width: ${props => (props.maxWidth ? props.maxWidth : "300")}px;
`

export const Logo = ({ maxWidth, imgSrc }) => {
  return (
    <div>this is logo</div>
    // <StyledLogo
    //   maxWidth={maxWidth}
    //   src={imgSrc ? imgSrc : data.strapiGlobal.logo.publicURL}
    //   alt="Kadrowane Fotografia Hobbystyczna Logo"
    // />
  )
}
