import { useState } from "react"

function CounterApp() {
  //const [cont, setCont] = useState(0)
  const [cont, setCont] = useState(0)
   return (
   <div style={{padding: '100px'}}>
    <h1>Contador: {cont}</h1>
    <hr />
    <button onClick={ ()=> {setCont(cont + 1)}}> Add to cart </button>
  </div>
 


   
  )
}


export default CounterApp



