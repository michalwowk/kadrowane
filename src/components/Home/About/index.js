import React from "react"
import styled from "styled-components"

import { Container } from "src/components/Container"
import { TextBlock } from "src/components/TextBlock"
import { ImageComposition } from "./ImageComposition"

const Wrapper = styled.section`
  min-height: 700px;
`
const StyledConatiner = styled(Container)`
  display: flex;
`

const Column = styled.div`
  flex: 1 0 50%;
`

export const About = () => {
  return (
    <Wrapper>
      <StyledConatiner>
        <Column>
          <ImageComposition />
        </Column>
        <Column>
          <TextBlock />
        </Column>
      </StyledConatiner>
    </Wrapper>
  )
}
