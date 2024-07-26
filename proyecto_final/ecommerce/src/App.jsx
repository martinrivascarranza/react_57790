import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import AmericanLeague from './components/AmericaLeague';
import NationalLeague from './components/NationalLeague'

function App() {
  return (
    <Router>
      <Navbar />
      <AmericanLeague />
      <NationalLeague/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Welcome to the MLB Store!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Category View" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;


