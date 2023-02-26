import React from "react"
import styled from "styled-components"
import { InputContainerProps } from "../../types/types"
import theme from "../../utils/theme"

function InputContainer({
  name,
  label,
  inputType,
  placeholder,
}: InputContainerProps): JSX.Element {
  return (
    <InputContainerStyled>
      <label htmlFor={name}>{label} </label>
      <input type={inputType} name={name} placeholder={placeholder} />
    </InputContainerStyled>
  )
}

const { colors, fonts, spacing, dimensions, border, radius, opacity } = theme

const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: ${dimensions.pixels.medium};
  align-items: flex-start;
  row-gap: ${spacing.xs};
  label {
    font-size: ${fonts.size.P2};
    font-weight: ${fonts.weights.bold};
  }
  input {
    height: ${dimensions.pixels.small};
    width: ${dimensions.percent.max};
    border-radius: ${radius.xtraSoft};
    border: ${border.softSolid} ${colors.white};
    padding-left: ${spacing.xs};
    outline: none;
    background: transparent;
    color: ${colors.white};
    font-size: ${fonts.size.P1};
    &::placeholder {
      opacity: ${opacity.soft};
      color: ${colors.white};
    }
    &:focus {
      border: ${border.softSolid} ${colors.tiffanyBlue};
    }
  }
`

export default InputContainer
