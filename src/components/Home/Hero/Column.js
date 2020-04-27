import React from "react"
import styled from "styled-components"

export const Column = ({ title, text, borders }) => {
  return (
    <StyledColumn borders={borders}>
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
    </StyledColumn>
  )
}

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ borders }) =>
    borders &&
    `
    border-left: 1px solid rgba(255,255,255,.4);
    border-right: 1px solid rgba(255,255,255,.4);
  `}
`
