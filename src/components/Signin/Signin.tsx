import React from "react"
import { signinInputs } from "./signinConfig"
import InputContainer from "../containers/InputContainer"
import RegisterContainer from "../containers/RegisterContainer"
import { InputContainerProps } from "../../types/types"

function Signin(): JSX.Element {
  return (
    <RegisterContainer backgroundImage="images/spiderman.png" title="Signin">
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
    </RegisterContainer>
  )
}

export default Signin
