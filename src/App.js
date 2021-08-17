import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from '../src/components/header/header.component';
import HomePage from '../src/pages/hompage/homepage.component';
import ShopPage from '../src/pages/shop/shop.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
