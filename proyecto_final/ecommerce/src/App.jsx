import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <ItemListContainer greeting="Welcome to the MLB Store!" />} />
        <Route exact path="/category/:categoryId" component={ItemListContainer} />
        <Route exact path="/item/:itemId" component={ItemDetailContainer} />
      </Switch>
    </Router>
  );
}

export default App;


