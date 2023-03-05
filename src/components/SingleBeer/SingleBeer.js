import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import getApiData from "../../apiCalls";
// import cleanBeerData from '../../utilities';
import './SingleBeer.css'



class SingleBeer extends Component{
    constructor(props){
        super(props)
        this.state = {
            singleBeer: {},
        }
    }

    
    componentDidMount = () => {
        getApiData(`beers/${this.props.beerid}`)
        .then(data => {
            console.log('data = ',data)
            this.setState({singleBeer: data[0]})
        })
    }
    
    handleClick = () => {
        const newState = this.state.singleBeer
        console.log('singleBeer = ',this.state.singleBeer)
        this.props.updateFavoritesState(newState)
    }

    render(){
        const{ name, tagline, description, image_url, abv, foodPairing, } = this.state.singleBeer
        return(
            <section className='single-beer-section'>
                <img className="single-beer-img" src={image_url} alt="beer" />
                <div>
                    <h2>{name}</h2>
                    <p>{tagline}</p>
                    <p className='description'>{description}</p>
                </div>
                <div>
                    <p>{abv}</p>
                    <p>{foodPairing}</p>
                </div>
                <NavLink to={'/beers'} className="homeButton">
                    <p>Back to Home</p>
                </NavLink>

                <button onClick={this.handleClick}>Add to Favorites</button> 
            </section>
        )
    }
}

export default SingleBeer