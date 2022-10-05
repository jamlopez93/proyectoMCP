import React,{useState, useEffect} from "react";


const Counter = ({startNumber}) => {
  const [count, setCount] = useState(2);
  const handleClick = () => {
    const previousCount = count
    setCount(previousCount+1)
    
  };
  useEffect(() => {console.log(count)}, [count])
  return (
    <div>
      <p>{count}{startNumber}</p>
        <button id="button" onClick={handleClick}>+</button>
    </div>
  );
};

export default Counter;
