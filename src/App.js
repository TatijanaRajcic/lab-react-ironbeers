import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import NewBeer from "./pages/NewBeer";
import BeerDetail from "./components/BeerDetail";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home}/>
      <Route path="/beers" component={AllBeers} />
      <Route path="/random-beer" component={BeerDetail} />
      <Route path="/new-beer" component={NewBeer} />
      <Route path="/details/:id" component={BeerDetail} />
    </div>
  );
}

export default App;
