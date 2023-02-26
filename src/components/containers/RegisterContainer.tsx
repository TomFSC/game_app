import React from "react"
import styled from "styled-components"
import { ContainerProps } from "../../types/types"
import theme from "../../utils/theme"

function RegisterContainer({
  title,
  backgroundImage,
  children,
}: ContainerProps): JSX.Element {
  return (
    <RegisterContainerStyled background={backgroundImage}>
      <h2>{title}</h2>
      {children}
    </RegisterContainerStyled>
  )
}

const { fonts, spacing, dimensions } = theme
interface ImageProps {
  background: string
}

const RegisterContainerStyled = styled.div<ImageProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${dimensions.pixels.large};
  width: ${dimensions.percent.medium};
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
`
export default RegisterContainer
