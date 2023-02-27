import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/pages/home/Home"
import theme from "./utils/theme"

function App() {
  const [register, setRegister] = useState<string>("")

  return (
    <AppStyled>
      <BrowserRouter>
        <Navbar register={register} setRegister={setRegister} />
        <Routes>
          <Route
            path="/"
            element={<Home register={register} setRegister={setRegister} />}
          />
        </Routes>
      </BrowserRouter>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${theme.colors.glaucous};
`

export default App
