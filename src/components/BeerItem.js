import React from 'react';
import "../stylesheets/BeerItem.css";

export default function BeerItem(props) {
  return (
    <div className="BeerItem">
      <div className="BeerItemImage">
        <img src={props.image} alt="beer img"/>
      </div>
      <div className="BeerItemContent">
        <h1>{props.name}</h1>
        <h2>{props.tagline}</h2>
        <p>Created by: {props.contributed_by}</p>   
      </div>
    </div>
  )
}
