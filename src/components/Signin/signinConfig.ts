import { InputContainerProps } from "../../types/types"

export const signinInputs: InputContainerProps[] = [
  {
    name: "pseudo",
    label: "Pseudo",
    inputType: "text",
    placeholder: "Entrez votre pseudo...",
  },
  {
    name: "email",
    label: "E-mail",
    inputType: "email",
    placeholder: "Adresse e-mail...",
  },
  {
    name: "password",
    label: "Mot de passe",
    inputType: "password",
    placeholder: "Choisissez un mot de passe...",
  },

  {
    name: "confirmPassword",
    label: "Confirmer le mot de passe",
    inputType: "password",
    placeholder: "Confirmez votre mot de passe...",
  },
]
