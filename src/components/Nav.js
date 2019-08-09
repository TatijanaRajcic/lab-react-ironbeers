import React from 'react';
import {Link} from "react-router-dom";
import "../stylesheets/Nav.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <Link to="/">
        <img src="./images/home.png" alt="home img"/>
      </Link>
    </nav>
  )
}
