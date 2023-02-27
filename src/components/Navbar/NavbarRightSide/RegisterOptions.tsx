import React from "react"
import styled from "styled-components"
import { RegisterProps } from "../../../types/types"
import theme from "../../../utils/theme"

function RegisterOptions({ setRegister }: Omit<RegisterProps, "register">) {
  return (
    <RegisterOptionsStyled>
      <span onClick={() => setRegister("login")}>Login</span>
      <span onClick={() => setRegister("signin")}>Signin</span>
    </RegisterOptionsStyled>
  )
}

const { colors, spacing, dimensions, textShadow } = theme

const RegisterOptionsStyled = styled.div`
  height: ${dimensions.percent.max};
  color: ${colors.glaucous};
  span {
    padding-right: ${spacing.m};
    &:hover {
      cursor: pointer;
      font-weight: bold;
      text-shadow: ${textShadow.softGrey};
    }
  }
`

export default RegisterOptions
