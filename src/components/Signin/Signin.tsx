import React from "react"
import { signinInputs } from "./signinConfig"
import InputContainer from "../containers/InputContainer"
import RegisterForm from "../containers/RegisterForm"
import { InputContainerProps } from "../../types/types"

function Signin(): JSX.Element {
  return (
    <RegisterForm
      btnLabel="S'ENREGISTER"
      backgroundImage="images/spiderman.png"
      title="Signin"
    >
      {signinInputs.map(
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

export default Signin
