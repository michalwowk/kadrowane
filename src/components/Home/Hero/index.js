import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { Column } from "./Column"
import { Container } from "../../Container"

export const Hero = ({
  logo,
  backgroundImages,
  leftSidetitle,
  leftSidetext,
  middleText,
  rightSideTitle,
  rightSidetext,
}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }
  return (
    <StyledSection>
      <Container>
        <Wrapper>
          {logo && (
            <div>
              <Img fixed={logo.localFile.childImageSharp.fixed} />
            </div>
          )}
          <ColumnWrapper>
            <Column title={leftSidetitle} text={leftSidetext} />
            <Column text={middleText} borders />
            <Column title={rightSideTitle} text={rightSidetext} />
          </ColumnWrapper>
        </Wrapper>
        <StyledSlider {...settings}>
          {backgroundImages.map((image, index) => (
            <StyledBgWrapper>
              <StyledImg fluid={image.image.localFile.childImageSharp.fluid} />
            </StyledBgWrapper>
          ))}
        </StyledSlider>
      </Container>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  ::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7),
      transparent 50%
    );
    position: absolute;
    z-index: 2;
  }
`

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow-x: hidden;
  position: relative;

  * {
    z-index: 3;
  }
`

const StyledSlider = styled(Slider)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;

  .slick-list {
    width: 100%;
  }

  .slick-arrow {
    position: absolute;
    z-index: 999;
    ::before {
      font-size: 40px;
    }
  }

  .slick-prev {
    left: 3%;
  }

  .slick-next {
    right: 3%;
    left: auto;
  }
`

const StyledBgWrapper = styled.div`
  width: 100%;
  height: 100%;
`
const ColumnWrapper = styled.div`
  padding-top: 25%;
  padding-bottom: 5%;
  align-self: flex-end;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`

const StyledImg = styled(Img)`
  min-height: 100vh;
`
