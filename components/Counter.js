import React,{useState, useEffect} from "react";

//Recibimos el valor inicial del contador como props
const Counter = ({ startNumber }) => {
  //Definimos un numero inicial para el contador y lo guardamos en una variable con estado (stateful). Aca se lee el valor de startNumber, y como ya se asignó, cuando startNumber cambie, count no va a cambiar, ni su valor inicial.
  const [count, setCount] = useState(startNumber);

  //Handler para el contador de incremento
  const handleClick = () => {
    const previousCount = count
    setCount(previousCount+1)
    
  };
  //El useEffect nos muestra el count en consola cada rerender.
  useEffect(() => {console.log(count)}, [count])
  return (
    <div>
            {/* Vemos que una vez que este componente carga, el valor inicial de count no cambia, aunque startNumber cambie. Esto es porque ese componente solo se está leyendo como valor inicial */ }
      <p> Cuenta : {count} </p>
            {/* El valor inicial se muestra aca, aunque el estado de este lo maneja el padre */ }
       <p>Valor Inicial: {startNumber}</p>
        <button id="button" onClick={handleClick}>+</button>
    </div>
  );
};

export default Counter;
