import React from "react"
import styled from "styled-components"
import { RegisterFormProps } from "../../types/types"
import theme from "../../utils/theme"

function RegisterForm({
  title,
  backgroundImage,
  children,
  btnLabel,
}: RegisterFormProps): JSX.Element {
  return (
    <RegisterFormStyled background={backgroundImage}>
      <h2>{title}</h2>
      {children}
      <button>{btnLabel}</button>
    </RegisterFormStyled>
  )
}

const { colors, fonts, spacing, border, dimensions, radius, boxShadow } = theme
interface ImageProps {
  background: string
}

const RegisterFormStyled = styled.form<ImageProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${dimensions.pixels.xl};
  width: ${dimensions.percent.tall};
  row-gap: ${spacing.xs};
  margin-top: ${spacing.l};
  background-size: cover;
  background-image: ${(props) => `url(${`${props.background}`})`};
  h2 {
    font-size: ${fonts.size.P4};
    font-style: italic;
    text-decoration: underline;
    align-self: center;
  }
  button {
    width: ${dimensions.percent.medium};
    height: ${dimensions.pixels.small};
    align-self: center;
    border-radius: ${radius.xtraSoft};
    background-color: ${colors.tiffanyBlue};
    border: ${border.softSolid} ${colors.tiffanyBlue};
    color: ${colors.white};
    font-size: ${fonts.size.P2};
    font-weight: ${fonts.weights.bold};
    &:hover {
      cursor: pointer;
      box-shadow: ${boxShadow.mediumWhite};
      background-color: ${colors.white};
      color: ${colors.tiffanyBlue};
    }
  }
`
export default RegisterForm
