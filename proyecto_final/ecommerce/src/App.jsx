import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import LogosAmerican from './components/AmericaLeague';
import NationalLogos from './components/NationalLeague';

function App() {
  return (
    <Router>
      <Navbar />
      <LogosAmerican/>
      <NationalLogos/>
      <Routes>
        <Route exact path="/" component={() => <ItemListContainer greeting="Welcome to the MLB Store!" />} />
        <Route exact path="/category/:categoryId" component={ItemListContainer} />
        <Route exact path="/item/:itemId" component={ItemDetailContainer} />
      </Routes>
    </Router>
  );
}

export default App;


