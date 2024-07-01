import React from 'react'
/*function App01() {
  
  return React.createElement('div', {}, [
 React.createElement('h1', {}, 'Titulo'),
 React.createElement('h2', {}, 'Martin'),
 React.createElement('h3', {}, 'Perro'),
 React.createElement('h4', {}, 'Doodle')
]);
}*/

/*function App() {
  
  return React.createElement('div', {}, [
 React.createElement('h1', {}, 'Vaterinaria'),
 React.createElement(Mascota, {
  nombre: 'Filipa',
  animal: 'perro',
  raza: 'Sharpei'
 }),
 /*agregar propiedades*/
 /*React.createElement(Mascota, {
  nombre: 'Bruno',
  animal: 'perro',
  raza: 'Golden'
 }),
 ]);
}*/

/*function Mascota() {
  return React.createElement('div', {}, [
  React.createElement('h2', {}, 'Martin'),
 React.createElement('h3', {}, 'Perro'),
 React.createElement('h4', {}, 'Doodle')
  ])
}*/

/*function Mascota(props) {
  return React.createElement('div', {}, [
  React.createElement('h2', {}, props.nombre),
 React.createElement('h3', {}, props.animal),
 React.createElement('h4', {}, props.raza)
  ])
}*/

/* JSX */

/*//no utilizar div se le conoce como fragment, puede ser <></> <React.Fragment></React.Fragment>*/ 

/*function App() {
return (
  <> 
  <h1>Vaterinaria</h1>
  <Mascota nombre='felipe' animal='perro' raza='sharpei' image="https://imgs.search.brave.com/Gj9Q0WC8XeqH2H6k0pfbuusYZ7eOC_0EM-20XuC6yVk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZG9nc3Rlci5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTQv/MDIvQ2hpbmVzZS1T/aGFyLXBlaS1wdXBw/eS1wb3J0cmFpdC1h/dC1nYXJkZW5fV2Fs/ZGVtYXItRGFicm93/c2tpX1NodXR0ZXJz/dG9jay5qcGc" alt="sharpei_dog"/>
  <Mascota nombre='Hemore' animal='perro' raza='callejero' image="https://imgs.search.brave.com/GmsNjmV9974YvMMhoEa3bANI5F_xwY-HW_1FubMG_Fo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubmF0aW9uYWxn/ZW9ncmFwaGljLmVz/L2ZpbGVzL3N0eWxl/cy9pbWFnZV8zMjAw/L3B1YmxpYy8wMS1z/dHJheS1kb2dzLW5h/dGlvbmFsZ2VvZ3Jh/cGhpY18xOTI3NjY2/LmpwZz93PTE2MDAm/aD05MDA" alt="callejero_dog" />
  </>
  );
}

/*COMPONENTE*/

function Nav() {
  return (
    <nav> 
    <div className="logo">Mi Tienda</div>
        <ul className="nav-links">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Carrito</a></li>
        </ul>
        </nav> 

  )
}

function Producto(props){
  return (
    <div className="product">
      <img
        src={props.imagen}
        alt={props.nombre}
      />
      <h2>{props.nombre}</h2>
      <p>{props.precio}</p>
      <button>Añadir al carrito</button>
    </div>
  );
}

function Productos() {
  return(
<section className="products">
        <h1>Productos Destacados</h1>
         <div className="product-grid">
            {/*<div className="product">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWj4_QrinB4Msvk2sRg60VWSdEySiGPmlylg&s"
                    alt="Producto 1"/>
                <h2>Producto 1</h2>
                <p>$10.00</p>
                <button>Añadir al carrito</button>
            </div> */}
             <Producto 
             imagen="https://d22fxaf9t8d39k.cloudfront.net/31177e5345ac3dfec93652de8031a5f5bdf755ec9f8224f8c61c4b7b7aeccee9104532.webp" 
             nombre='calle' 
             precio={150}/>
             <Producto 
             imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxXWTypp1bdoPyCYo7qdqyWvKj11OquEMGg&s" 
             nombre='montñna'
              precio={300}/>
             <Producto 
             imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxXWTypp1bdoPyCYo7qdqyWvKj11OquEMGg&s" 
             nombre='pista' 
             precio={500}/>
             
            

            {/* <div className="product">
                <img src="https://d22fxaf9t8d39k.cloudfront.net/31177e5345ac3dfec93652de8031a5f5bdf755ec9f8224f8c61c4b7b7aeccee9104532.webp"
                    alt="Producto 2"/>
                <h2>Producto 2</h2>
                <p>$20.00</p>
                <button>Añadir al carrito</button>
            </div>
            <div className="product">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxXWTypp1bdoPyCYo7qdqyWvKj11OquEMGg&s"
                    alt="Producto 3"/>
                <h2>Producto 3</h2>
                <p>$30.00</p>
                <button>Añadir al carrito</button>
            </div>*/ }
        </div>
    </section>

  )
}

function Footer() {
  return (
    <footer>
    <p>&copy; 2024 Mi Tienda Online</p>
</footer>
  )
}

function App() {
  return (
    <> 
    <Nav/>
    <Producto/>
    <Productos/>
    <Footer/>
    </>
  )
}

export default App