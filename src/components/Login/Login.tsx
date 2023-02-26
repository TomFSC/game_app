import React from "react"
import { loginInputs } from "./loginConfig"
import InputContainer from "../containers/InputContainer"
import RegisterForm from "../containers/RegisterForm"
import { InputContainerProps } from "../../types/types"

function Login(): JSX.Element {
  return (
    <RegisterForm
      btnLabel="SE CONNECTER"
      backgroundImage="images/ironman.png"
      title="Login"
    >
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
    </RegisterForm>
  )
}

export default Login
