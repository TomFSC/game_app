import React from "react"
import styled from "styled-components"
import theme from "../../utils/theme"

function Navbar(): JSX.Element {
  return (
    <NavbarStyled>
      <div className="navbar-leftSide">
        <span>GAMES DASHBOARD</span>
      </div>
      <div className="navbar-rightSide">
        <div className="infos">
          <span>Login</span>
          <span>Signin</span>
        </div>
        <div className="img-container"></div>
      </div>
    </NavbarStyled>
  )
}

const { colors, fonts, dimensions, spacing, textShadow } = theme

const NavbarStyled = styled.div`
  height: ${dimensions.pixels.medium};
  width: ${dimensions.percent.max};
  position: absolute;
  top: 0;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${fonts.size.P2};
  .navbar-leftSide {
    color: ${colors.glaucous};
    padding-left: ${spacing.m};
    span {
      &:hover {
        cursor: pointer;
      }
    }
  }
  .navbar-rightSide {
    color: ${colors.glaucous};

    span {
      padding-right: ${spacing.m};
      &:hover {
        cursor: pointer;
        font-weight: bold;
        text-shadow: ${textShadow.softGrey};
      }
    }
  }
`

export default Navbar
