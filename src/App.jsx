/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Telescopios from './Components/Telescopios'; 
import Reflector from './Components/Reflector'; 
import Refractor from './Components/Refractor'; 
import Catadioptrico from './Components/Catadioptrico'; 
import Objetos from './Components/Objetos'; 
import Ingenieria from './Components/Ingenieria'; 
import Checkout from './Components/Checkout'; 
import Cart from './Components/Cart'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/telescopios" element={<Telescopios />}>
          <Route path="refractor" element={<Refractor />} />
          <Route path="reflector" element={<Reflector />} />
          <Route path="catadioptrico" element={<Catadioptrico />} />
        </Route>
        <Route path="/objetos" element={<Objetos />} />
        <Route path="/ingenieria" element={<Ingenieria />} />
        <Route path="/checkout" element={<Checkout />} /> 
        <Route path="/cart" element={<Cart />} /> 
      </Routes>
    </Router>
  );
};

export default App;