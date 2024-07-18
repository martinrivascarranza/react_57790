import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={() => <ItemListContainer greeting="Welcome to the MLB Store!" />} />
        <Route exact path="/category/:categoryId" component={ItemListContainer} />
        <Route exact path="/item/:itemId" component={ItemDetailContainer} />
      </Routes>
    </Router>
  );
}

export default App;


