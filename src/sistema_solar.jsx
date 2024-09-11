import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import viteLogo from '/vite.svg'
import { Header } from './App'
import './styles/sistema_solar.css'

createRoot(document.getElementById('sistema')).render(
    <StrictMode>
      <Sistema />
    </StrictMode>,
)
  

function Sistema() {
    return(
        <>
            <Header/>
            <Contenido/>
        </>
    )
}

function Contenido() {
    return(
        <>
            <section className='intro'>
                <h1>El sistema solar</h1>
                <h2>Una parada antes del largo viaje</h2>
            </section>
            <Informacion/>
        </>
    )
}

function Informacion() {
    return(
        <section className='info'>
            <h1>Empecemos en nuestra estrella</h1>
            <h2>El poderoso centro del sistema solar</h2>
            <p>Enorme e imponente con unos 1.4 millones de Kilometros de diametro es el cuerpo celeste mas grande de nuestro 
                sistema solar, sin embargo a comparacion del resto de estrellas en el universo, el sol es minusculo
            </p>
            <p>El sol se compone principalmente de gases verdaderamente calientes que pueden alcanzar una temperatura de 5500 grados centigrados en 
                la suerficie y superar los 15,5 millones de grados centigrados en el nucleo
            </p>
            <p>Hablando del nucleo, es algo increible, su temperatura se debe a las reacciones de fusion que ocurren contantemente
                donde el hidrogeno se transforma el helio generando mucha energia que posteriormente sera transportada por los fotones 
                a la capa superior del interior del Sol, la zona convectiva donde el movimiento de los gases hirviendo lleva toda la energia hasta 
                la superficie del sol
            </p>
        </section>

        
    )
}