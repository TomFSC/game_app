import React from "react"
import InputContainer from "../containers/InputContainer"
import RegisterContainer from "../containers/RegisterContainer"

function Login() {
  return (
    <RegisterContainer>
      <p>Login</p>
      <InputContainer name="pseudo" label="Pseudo" inputType="text" />
      <InputContainer
        name="password"
        label="Mot de passe"
        inputType="password"
      />
    </RegisterContainer>
  )
}

export default Login
