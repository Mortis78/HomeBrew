import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
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
        getApiData(`beers/${this.props.beerid}`)
        .then(data => {
            console.log('data = ',data)
            this.setState({singleBeer: data[0]})
        })
        console.log('singleBeer = ',this.state.singleBeer)
    }


    render(){
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
                <NavLink to={'/beers'} className="homeButton">
                    <p>Back to Home</p>
                </NavLink>
            </section>
        )
    }
}

export default SingleBeer;