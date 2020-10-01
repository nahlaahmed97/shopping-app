import React from 'react';

import './App.css';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>

      <div className="grid-container">
        <header className="header">
          <div className="brand">

            <Link to="/">Shopping App</Link>

          </div>
          <div className="header-links">
          <Link to="/cart">Cart </Link>
         
          </div>
        </header>



        <main className="main">
          <div className="content">

            <Route path="/products/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />

          </div>
        </main>

        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
