import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  display: none;
`

const Header = ({ siteTitle }) => <StyledHeader></StyledHeader>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
