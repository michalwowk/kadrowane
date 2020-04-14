import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

export const ImageComposition = () => {
  const Wrapper = styled.div`
    position: relative;
    min-height: 800px;
  `

  const AbsoluteImg = styled(Img)`
    position: absolute !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `

  const ImageOne = styled(AbsoluteImg)`
    margin-left: 100px;
    z-index: 3;
  `

  return (
    <Wrapper>
      {/* <ImageOne
        fixed={data.strapiHomepage.aboutUsPhotoOne.childImageSharp.fixed}
      ></ImageOne>
      <AbsoluteImg
        fixed={data.strapiHomepage.aboutUsPhotoTwo.childImageSharp.fixed}
      ></AbsoluteImg>
      <AbsoluteImg
        fixed={data.strapiHomepage.aboutUsPhotoTree.childImageSharp.fixed}
      ></AbsoluteImg> */}
    </Wrapper>
  )
}
