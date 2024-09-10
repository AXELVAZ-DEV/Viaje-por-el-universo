import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'

export default function App() {

  return (
    <>
      <Contenido/>
    </>
  )
}

function Contenido() {
  return(
    <>
      <Header/>
      <Index/>
      
    </>
  )
}

export function Header(){
  return(
    <header>
      <h1>Viaje mas alla del cielo</h1>
        <nav>
          <ul>
            <li><a href="sistema_solar.html">El sistema solar</a></li>
            <li><a href="">Mas alla del sistema</a></li>
            <li><a href="">Nigromante cosmico</a></li>
            <li><a href="">provisional</a></li>
          </ul>
        </nav>
    </header>
  )
}

function Index() {
  return (
    <main className='index'>
      <h1>Aqui comienza el viaje</h1>
      <section className='texto'>
        <div className='info'>
          <div>
            <h1>El planeta tierra</h1>
            <p>Un mundo fascinante que hace de nuestro hogar y del cual solo conocemos la superficie</p>
            <p>Tercer planeta del sistema solar y en terminos de tamaño, la tierra es el quinto planeta mas grande des sistema solar </p>
            <p>A una distancia promedio de aproximadamente 149.6 MIllomens de Kilometros de nuestro sol encontrandose dentro de la zona habitable
              de nuestro sistema solar siendo el unico capas de albergar vida
            </p>
          </div>
        </div>
        <div className='capas'>
          <div>
            <p className='corteza'>Aunque la corteza de la tierra es solida, sus demas capas no lo son</p>
            <h2>El Manto</h2>
            <p>Se encuentra debajo de la corteza y se extiende aproximadamente 2,890 kilometros hacia el centro de la tierra ocupando el 84 del volument total de la del planeta</p>
            <p>Es una capa semisolida y viscosa que se divide en superior e inferior. mientras que el manto superior es rigido el inferior es mas plastico y convectivo </p>
            <h2>El Nucleo</h2>
            <p>Es la capa mas profunda y caliente de la tierra y se divide en dos partes</p>
            <h3>Nucleo externo</h3>
            <p>Es liquido y esta compuesto principalmenten de hierro y niquel</p>
            <p>la diferencia de temperatura del nucleo externo genera corrientes de conveccion y metales calientes en estado liquido emergen de el, posteriormente se enfrian y decienden al nucleo interno.</p>
            <p>Estas corrientes de convercion en materiales conductores, provoca corrientes electricas que inducen un campo magnetico al planeta</p>
            <h3>Nucleo interno</h3>
            <p>Es sólido debido a la alta presión y temperatura. Esta compuesto del hierro y niquel que decienden del nucleo externo</p>
            <p>Aunque se cree que la temperatura del nucleo interno es similar a la de la superficie de nuestro sol, la precion extrema impide que se convierta en liquido</p>
          </div>
        </div>
        <h3 className='siguiente'><a href='sistema_solar.html'>Seguimos con el viaje?</a></h3>
      </section>
    </main>
  )
}


