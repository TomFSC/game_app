import React from "react"

export type RegisterFormProps = {
  title: string
  backgroundImage: string
  children: React.ReactNode
  btnLabel: string
}

export type InputContainerProps = {
  name: string
  label: string
  inputType: string
  placeholder: string
}

export type RegisterProps = {
  register: string
  setRegister: React.Dispatch<React.SetStateAction<string>>
}
