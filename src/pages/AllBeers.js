import React, { Component } from 'react';
import axios from "axios";
import BeerItem from "../components/BeerItem";
import {Link} from "react-router-dom";
import "../stylesheets/AllBeers.css"

class AllBeers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: null,
      beers: []
    }
  }

  componentDidMount() {
    axios.get("https://ih-beers-api.herokuapp.com/beers")
      .then((response)=>{
        // check axios type of response before asigning it to SetState
        this.setState({beers:response.data})
      })
      .catch((error)=>{
        this.setState({error:error})
      })
  }

  render() {

    /* we pass a query "selected" so that we can differentiate the details page accessed from the beers page*/
    /* from the one accessed from the random page */

    let allBeers = this.state.beers.map((beer)=>{
      return(
        <div>
          <Link className="Link" to={`/details/${beer._id}/?selected`}>
            <BeerItem 
              name = {beer.name}
              tagline = {beer.tagline}
              image = {beer.image_url}
              contributed_by = {beer.contributed_by}
            />
          </Link>
        </div>
      )
    })

    return (
      <div className="AllBeers">
        {allBeers}
      </div>
    )
  }
}

export default AllBeers