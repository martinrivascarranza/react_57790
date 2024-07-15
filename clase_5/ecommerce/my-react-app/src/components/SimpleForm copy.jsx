import React, { useRef } from 'react';

const SimpleForm = () => {
  
  const inputRef = useRef()
  console.log(inputRef)

  const handleClick = () => {
    console.log('click')
    console.log(inputRef.current.select())
  }

  return (
    
    <div>
      <h1>UseRef</h1>
      <hr />
      <input
      placeholder="Ingrese datos" 
      ref={inputRef}
      />
      <button onClick={handleClick}>
        Foco en Input
      </button>
    </div>
  )
}


export default SimpleForm
