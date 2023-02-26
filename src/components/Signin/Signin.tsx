import React from "react"
import InputContainer from "../containers/InputContainer"
import RegisterContainer from "../containers/RegisterContainer"

function Signin() {
  return (
    <RegisterContainer>
      <p>Signin</p>
      <InputContainer name="pseudo" label="Pseudo" inputType="text" />
      <InputContainer name="email" label="E-mail" inputType="email" />
      <InputContainer
        name="password"
        label="Mot de passe"
        inputType="password"
      />
      <InputContainer
        name="confirmPassword"
        label="Confirmer le mot de passe"
        inputType="password"
      />
    </RegisterContainer>
  )
}

export default Signin
