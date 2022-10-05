import React from 'react'
import { useState } from 'react'
import Counter from '../components/counter'


const morris = () => {
    const [toggleStatus, setToggleStatus] = useState(true)
    const numero = 5
    const handleClick = () => {       
        setToggleStatus(!toggleStatus)
    }

  return (
    <>
    <p>{toggleStatus ? "trici" : "el buen morris"}</p>
        <a onClick={handleClick}>cambio!</a>
        <Counter startNumber={numero}/>
    
    </>
  )
}
export default morris