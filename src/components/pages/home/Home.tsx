import React, { useState } from "react"
import styled from "styled-components"
import theme from "../../../utils/theme"
import Login from "../../Login/Login"
import Signin from "../../Signin/Signin"

function Home(): JSX.Element {
  const [register, setRegister] = useState<string>("signin")
  return (
    <HomeStyled>
      <h1>
        WELCOME <br /> TO <br /> YOUR <br /> MARVEL <br /> GAME DASHBOARD
      </h1>
      {register === "" ? (
        <h3>
          Please <span>Login</span> or <span>Signin</span>
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
