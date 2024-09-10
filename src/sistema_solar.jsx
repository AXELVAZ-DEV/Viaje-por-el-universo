import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import viteLogo from '/vite.svg'
import { Header } from './App'
import './styles/sistema_solar.css'
import "./styles/App.css"

createRoot(document.getElementById('sistema')).render(
    <StrictMode>
      <Sistema />
    </StrictMode>,
)
  

function Sistema() {
    return(
        <Header/>
    )
}