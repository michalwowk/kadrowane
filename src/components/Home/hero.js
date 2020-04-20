import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
    <section>
      <Wrapper>
        {logo && (
          <div>
            <Img fixed={logo.localFile.childImageSharp.fixed} />
          </div>
        )}
      </Wrapper>
      <StyledSlider {...settings}>
        {backgroundImages.map((image, index) => (
          <StyledBgWrapper>
            <StyledBg fluid={image.image.localFile.childImageSharp.fluid} />
          </StyledBgWrapper>
        ))}
      </StyledSlider>
    </section>
  )
}

const Wrapper = styled.div`
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

const StyledSlider = styled(Slider)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
`

const StyledBgWrapper = styled.div`
  width: 100%;
  height: 100%;
`
const StyledBg = styled(Img)`
  width: 100%;
  height: 100%;
`
