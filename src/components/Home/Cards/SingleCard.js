import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

export const SingleCard = ({
  title = "lorem",
  subtitle = "ipsum",
  description = "descrption",
  linkText = "view photos",
  linkUrl = "#",
  imageSrc = "",
}) => {
  const Wrapper = styled.div`
    background-image: linear-gradient(
        to top,
        rgba(255, 255, 255, 0.15),
        rgba(255, 255, 255, 0.15)
      ),
      url(${imageSrc});
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 600px;
  `
  return (
    <Wrapper>
      {title && <h2>{title}</h2>}
      {subtitle && <h3>{subtitle}</h3>}
      {description && <p>{description}</p>}
      <Link to={linkUrl}>{linkText}</Link>
    </Wrapper>
  )
}
