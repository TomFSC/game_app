import React from "react"
import styled from "styled-components"
import { RegisterProps } from "../../../types/types"
import theme from "../../../utils/theme"
import Profile from "./Profile"
import RegisterOptions from "./RegisterOptions"

function NavbarRightSide({ setRegister }: Omit<RegisterProps, "register">) {
  const user = "TOM"
  return (
    <NavbarRightSideStyled>
      {user ? (
        <Profile user={user} />
      ) : (
        <RegisterOptions setRegister={setRegister} />
      )}
    </NavbarRightSideStyled>
  )
}

const { spacing, dimensions } = theme

const NavbarRightSideStyled = styled.div`
  height: ${dimensions.percent.max};
  padding-right: ${spacing.m};
  display: flex;
  align-items: center;
`

export default NavbarRightSide
