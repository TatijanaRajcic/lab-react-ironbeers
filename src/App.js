import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import NewBeer from "./pages/NewBeer";
import BeerDetail from "./components/BeerDetail";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
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
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
    </div>
  );
}

export default App;
