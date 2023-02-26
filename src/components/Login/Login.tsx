import React from "react"
import { loginInputs } from "./loginConfig"
import InputContainer from "../containers/InputContainer"
import RegisterContainer from "../containers/RegisterContainer"
import { InputContainerProps } from "../../types/types"

function Login(): JSX.Element {
  return (
    <RegisterContainer backgroundImage="images/ironman.png" title="Login">
      {loginInputs.map(
        ({
          name,
          label,
          inputType,
          placeholder,
        }: InputContainerProps): JSX.Element => {
          return (
            <InputContainer
              name={name}
              label={label}
              inputType={inputType}
              placeholder={placeholder}
            />
          )
        }
      )}
    </RegisterContainer>
  )
}

export default Login
