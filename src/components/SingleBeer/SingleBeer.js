import React, { Component } from 'react'
import getApiData from '../apiCalls.js'
import './SingleBeer.css'



class SingleBeer extends Component{
    constructor(){
        super()
        this.state = {
            beer: {}
        }
    }

    render(){
        const{ name, tagline, description, image_url, abv, foodPairing, } = this.state.beer
        return(
            <section>
                <img className="single-beer-img" src={image_url} alt="beer" />
                <span>
                    <h2>{name}</h2>
                    <p>{tagline}</p>
                    <p>{description}</p>
                </span>
                <span>
                    <p>{abv}</p>
                    <p>{foodPairing}</p>

                </span>
            </section>
        )
    }
}