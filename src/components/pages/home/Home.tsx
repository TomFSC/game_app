import React, { useState } from "react"
import styled from "styled-components"
import { RegisterProps } from "../../../types/types"
import theme from "../../../utils/theme"
import Login from "../../Login/Login"
import Signin from "../../Signin/Signin"

function Home({ register, setRegister }: RegisterProps): JSX.Element {
  return (
    <HomeStyled>
      <h1>
        WELCOME <br /> TO <br /> YOUR <br /> MARVEL <br /> GAME DASHBOARD
      </h1>
      {register === "" ? (
        <h3>
          Please <span onClick={() => setRegister("login")}>Login</span> or{" "}
          <span onClick={() => setRegister("signin")}>Signin</span>
        </h3>
      ) : null}
      {register === "login" ? <Login /> : null}
      {register === "signin" ? <Signin /> : null}
    </HomeStyled>
  )
}

const { colors, spacing, fonts, dimensions } = theme

const HomeStyled = styled.div`
  height: ${dimensions.percent.max};
  width: ${dimensions.percent.max};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: ${spacing.xxl};
  color: ${colors.white};
  h1 {
    font-size: ${fonts.size.P5};
    margin-bottom: ${spacing.l};
  }
  span {
    text-decoration: underline;
    &:hover {
      cursor: pointer;
    }
  }
`
export default Home
