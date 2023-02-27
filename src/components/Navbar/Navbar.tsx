import React from "react"
import styled from "styled-components"
import { RegisterProps } from "../../types/types"
import theme from "../../utils/theme"
import NavbarRightSide from "./NavbarRightSide/NavbarRightSide"

function Navbar({ setRegister }: Omit<RegisterProps, "register">): JSX.Element {
  return (
    <NavbarStyled>
      <div className="navbar-leftSide">
        <span>GAMES DASHBOARD</span>
      </div>
      <NavbarRightSide setRegister={setRegister} />
    </NavbarStyled>
  )
}

const { colors, fonts, dimensions, spacing } = theme

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
`

export default Navbar
