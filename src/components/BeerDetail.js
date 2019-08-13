import React, { Component } from 'react';
import axios from "axios";
import MainLayout from "../layout/MainLayout";
import "../stylesheets/BeerDetail.css";

class BeerDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: null,
      beer: {}
    }
  }

  componentDidMount() {

    let {params} = this.props.match
    var currentBeerId = params.id
    let type = this.props.location.search

    axios.get(type === "?selected" ? `https://ih-beers-api.herokuapp.com/beers/${currentBeerId}` : "https://ih-beers-api.herokuapp.com/beers/random")
      .then((response)=>{
        // check axios type of response before asigning it to SetState
        this.setState({beer:response.data})
      })
      .catch((error)=>{
        this.setState({error:error})
      })
  }

  render() {

    let foundBeer = this.state.beer;

    return (
      <MainLayout>
        <div className="BeerDetail">
          <div className="BeerDetailImage">
            <img src={foundBeer.image_url} alt="beer"/>
          </div>
          <div className="BeerDetailInfo">
            <h1>{foundBeer.name}</h1>
            <p className="Grey">{foundBeer.attenuation_level}</p>
            <p className="Grey">{foundBeer.tagline}</p>
            <p className="Bold">{foundBeer.first_brewed}</p>
          </div>
          <p>{foundBeer.description}</p>
          <p className="Grey">{foundBeer.contributed_by}</p>
        </div>
      </MainLayout>
    )
  }

}

export default BeerDetail
