import React, { useState } from "react"
import styled from "styled-components"
import Login from "../../Login/Login"
import Signin from "../../Signin/Signin"

function Home(): JSX.Element {
  const [register, setRegister] = useState<string>("")
  return (
    <HomeStyled>
      <h1>
        WELCOME <br /> TO <br /> YOUR <br /> MARVEL <br /> GAME DASHBOARD
      </h1>
      <h3>
        Please <span>Login</span> or <span>Signin</span>
      </h3>
      {register === "login" ? <Login /> : null}
      {register === "signin" ? <Signin /> : null}
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  color: white;
  h1 {
    margin-bottom: 25px;
  }
  span {
    text-decoration: underline;
    &:hover {
      cursor: pointer;
    }
  }
  .login {
    background: url("images/ironman.png");
    background-size: cover;
  }
  .signin {
    background: url("images/spiderman.png");
    background-size: cover;
  }
`
export default Home
