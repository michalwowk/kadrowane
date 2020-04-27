import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export const SingleCard = ({
  title = "lorem",
  subtitle = "ipsum",
  description = "descrption",
  linkText = "view photos",
  linkUrl = "#",
  imageSrc,
}) => {
  return (
    <OverflowWrapper>
      <StyledWrapper imageSrc={imageSrc}>
        {title && <h2>{title}</h2>}
        {subtitle && <h3>{subtitle}</h3>}
        {description && <p>{description}</p>}
        <Link to={linkUrl}>{linkText}</Link>
      </StyledWrapper>
    </OverflowWrapper>
  )
}

const OverflowWrapper = styled.div`
  overflow: hidden;
`

const StyledWrapper = styled.div`
  background-image: url(${props => props.imageSrc});
  background-size: cover;
  background-position: center center;
  min-height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease-in-out;

  ::after {
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 1;
    position: absolute;
    background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.3),
      transparent
    );
  }

  :hover {
    transform: scale(1.05);
    ::after {
      opacity: 0;
    }
  }
`
