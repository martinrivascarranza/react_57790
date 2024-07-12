import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Mi Tienda</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Carrito</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Producto(props){
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        src={props.imagen}
        className="card-img-top"
        alt={props.nombre}
      />
      <div className="card-body">
        <h5 className="card-title">{props.nombre}</h5>
        <p className="card-text">{props.precio}</p>
        <a href="#" className="btn btn-primary">Añadir al carrito</a>
      </div>
    </div>
  );
}

const Productos = () => {
  return (
    <section className="container my-5">
      <h1 className="text-center mb-4">Productos Destacados</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <Producto
            imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWj4_QrinB4Msvk2sRg60VWSdEySiGPmlylg&s"
            nombre="Calle"
            precio={300000}
          />
        </div>
        <div className="col-md-4 mb-4">
          <Producto
            imagen="https://d22fxaf9t8d39k.cloudfront.net/31177e5345ac3dfec93652de8031a5f5bdf755ec9f8224f8c61c4b7b7aeccee9104532.webp"
            nombre="Montaña"
            precio={500000}
          />
        </div>
        <div className="col-md-4 mb-4">
          <Producto
            imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxXWTypp1bdoPyCYo7qdqyWvKj11OquEMGg&s"
            nombre="Carrera"
            precio={200000}
          />
        </div>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer className="bg-light text-center py-4">
        <p>&copy; 2024 Mi Tienda Online</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Productos />
      <Footer />
    </>
  );
}

export default App;
