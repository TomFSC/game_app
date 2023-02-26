import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/pages/home/Home"
import theme from "./utils/theme"

function App() {
  return (
    <AppStyled>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${theme.colors.glaucous};
  /* background: url("/images/background.jpg") rgba(0, 0, 0, 0.6);
  background-size: cover;
  background-blend-mode: darken; */
`

export default App
