import React, { Component } from 'react'
import { Link } from "react-router-dom";
import getApiData from "../../apiCalls";
import cleanBeerData from '../../utilities';
import './SingleBeer.css'



class SingleBeer extends Component{
    constructor(props){
        super(props)
        this.state = {
            singleBeer: {}
        }
    }


    componentDidMount(){
        console.log(this.state.singleBeer)
        getApiData(`beers/${this.props.beer}`)
        .then(data => {
            console.log(data)
          const cleanData = data.map(beer => cleanBeerData(beer))
          this.setState({singleBeer: cleanData })
        })
    }


    render(){
        console.log(this.state)
        const{ name, tagline, description, image_url, abv, foodPairing, } = this.state.singleBeer
        return(
            <section className='single-beer-section'>
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
                <Link to={'/beers'} className="homeButton">
                    <p>Back to Home</p>
                </Link>
            </section>
        )
    }
}

export default SingleBeer;