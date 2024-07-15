import React from 'react'
//import Nav from './components/Nav'
//import Footer from './components/Footer'
import Productos from './components/Productos'
import {Header, Footer} from './components/Generico'



function Layout(props) {
  return (
    <>
    {props.children}
  <h2 style={{color: props.color}}>{props.titulo}</h2>
  
</>
  )
}

function App() {
      return (
        <>
        {/*   <Layout titulo='Bienvenidos' color='red'>
            <h1>Pagina Principal</h1>
            <p style={{color: 'blue'}}>Este es el texto explicativo</p>
          </Layout>*/}
        </>
      );
    }

      /*function App() {
        return (
          <>
            <Layout titulo='Bienvenidos' color='red'>
              <Nav/>
      
            </Layout>
          </>
        );
      }*/
    
 
  



export default App