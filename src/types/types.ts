import React from "react"

export type ContainerProps = {
  title: string
  backgroundImage: string
  children: React.ReactNode
}

export type InputContainerProps = {
  name: string
  label: string
  inputType: string
  placeholder: string
}
