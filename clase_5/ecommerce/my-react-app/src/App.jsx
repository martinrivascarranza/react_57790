import React from 'react'
import Nav from './components/Nav'
//import Footer from './components/Footer'
import Productos from './components/Productos'
import {Header, Footer} from './components/Generico'


function Layout(props) {
  return (
  <h1>{props.titulo}</h1>
  )
}





function App() {
 return (
    <>
    <Layout titulo = 'Bienvenidos'/>
      {/*<Header titulo='lo de tito' subtitulo='Las mejores bicicletas'/>
      <Nav />
      <Productos />
      <Footer />*/}
    </>
  )
}


export default App