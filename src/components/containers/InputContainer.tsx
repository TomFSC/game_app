import React from "react"
import styled from "styled-components"
import { InputContainerProps } from "../../types/types"

function InputContainer({ name, label, inputType }: InputContainerProps) {
  return (
    <InputContainerStyled>
      <label htmlFor={name}>{label} </label>
      <input type={inputType} name={name} />
    </InputContainerStyled>
  )
}

const InputContainerStyled = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  justify-content: space-between;
`

export default InputContainer
