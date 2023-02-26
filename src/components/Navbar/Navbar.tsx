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

const NavbarStyled = styled.div`
  height: 80px;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .navbar-leftSide {
    color: ${theme.colors.glaucous};
    padding-left: 20px;
    span {
      font-size: 20px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .navbar-rightSide {
    color: ${theme.colors.glaucous};
    font-size: 20px;

    span {
      padding-right: 20px;
      &:hover {
        cursor: pointer;
        font-weight: bold;
        text-shadow: 5px 5px 8px grey;
      }
    }
  }
`

export default Navbar
