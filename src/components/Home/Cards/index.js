import React from "react"
import { SingleCard } from "./SingleCard"
import styled from "styled-components"

import roadPhoto from "src/images/backgrounds/droga_las.jpg"
import flowersPhoto from "src/images/backgrounds/rzepak.jpg"
import myPlacePhoto from "src/images/backgrounds/kozi.jpg"

const StyledCards = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const Cards = () => {
  return (
    <StyledCards>
      <SingleCard title="title 1" subtitle="subtitle1" imageSrc={roadPhoto} />
    </StyledCards>
  )
}
