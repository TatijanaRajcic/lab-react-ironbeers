import React from 'react';
import MainLayout from "../layout/MainLayout";
import {Link} from "react-router-dom";
import "../stylesheets/Home.css";

export default function Home() {
  return (
    <MainLayout>
      <div className="Home">
        <article>
          <Link className="Link" to="/beers">
          <img src="./images/beers.png" alt="all beers"/>
          <div className="ContentContainer">
            <h1>All Beers</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A placeat quis temporibus consectetur quia aperiam natus esse ipsam nisi illum?</p>
          </div>
          </Link>
        </article>
        <article>
          <Link className="Link" to="/random-beer">
            <img src="./images/random-beer.png" alt="random beer"/>
            <div className="ContentContainer">
              <h1>Random Beer</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A placeat quis temporibus consectetur quia aperiam natus esse ipsam nisi illum?</p>
            </div>
          </Link>
        </article>
        <article>
          <Link className="Link" to="/new-beer">
            <img src="./images/new-beer.png" alt="create new beer"/>
            <div className="ContentContainer">
              <h1>New Beer</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A placeat quis temporibus consectetur quia aperiam natus esse ipsam nisi illum?</p>
            </div>
          </Link>
        </article>
      </div>
    </MainLayout>
  )
}
