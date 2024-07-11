import  { useState } from 'react'
import Nav from './components/Nav'
//import Footer from './components/Footer'
import Productos from './components/Productos'
import {Header, Footer} from './components/Generico'


function App() {
 //let [valor, setValor] = useState(0);
 //console.log(valor) 
 
  return (
    <>
      <Header titulo='lo de tito' subtitulo='Las mejores bicicletas'/>
      <Nav />
      <Productos />
      <Footer />
    </>
  )
}


export default App