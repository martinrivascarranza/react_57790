import { useState } from "react"

function CounterApp() {
   //const [cont, setCont] = useState(0)
   const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
   })

  const {counter1, counter2, counter3} = state

  const handleClick = () => {
   // setCont(count => count + 1) // tambien puede ser SetCount(count + 1)
   setState({
    ...state,
    counter1: counter1 + 1,
    counter2: counter2 + 1
  }) 
  }
   return (
   <div style={{padding: '100px'}}>
    <h1>Contador: {state.counter1}</h1>
    <h1>Contador: {state.counter2}</h1>
    <h1>Contador: {state.counter3}</h1>
    <hr />
    <button onClick={ handleClick }> Add to cart </button>

  </div>
 


   
  )
}


export default CounterApp



