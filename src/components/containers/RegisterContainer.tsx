import React from "react"
import styled from "styled-components"
import { ContainerProps } from "../../types/types"

function RegisterContainer({ children }: ContainerProps) {
  return <RegisterContainerStyled>{children} </RegisterContainerStyled>
}

const RegisterContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;
  width: 40%;
  row-gap: 10px;
  margin-top: 25px;
`
export default RegisterContainer
