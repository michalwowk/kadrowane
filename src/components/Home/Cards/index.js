import React from "react"
import { SingleCard } from "./SingleCard"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const Cards = ({ title, column }) => {
  return (
    <>
      {title && <h2>{title}</h2>}
      {column && (
        <Wrapper>
          {column.map(item => {
            const { text, title, image } = item
            console.log(item)
            return (
              <SingleCard
                key={title}
                title={title}
                subtitle={text}
                imageSrc={image.source_url}
              />
            )
          })}
        </Wrapper>
      )}
    </>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
