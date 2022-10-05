import React from 'react'
import { useState } from 'react'
import Counter from '../components/Counter'


const Morris = () => {
  
    //Definimos un numero inicial para el contador y lo guardamos en una variable con estado (stateful)
  const [startNumber, setStartNumber] = useState(8)
  
  //Esto es para el toggler del principio
    const [toggleStatus, setToggleStatus] = useState(true)
    const handleClick = () => {       
        setToggleStatus(!toggleStatus)
    }

  return (
    <>
      {/* El toggler */ }
    <p>{toggleStatus ? "trici" : "el buen morris"}</p>
      <a onClick={handleClick}>cambio!</a>
      {/* Creamos un botón que cambia al azar de 1 a 100 el valor de startNumber */ }
      <button onClick={() => setStartNumber(Math.floor(Math.random()*100))}>Cambiar número inicial</button>
          {/* Llamamos el componente pasandole startNumber como props */ }
      <Counter startNumber={startNumber} />
    
    </>
  )
}
export default Morris