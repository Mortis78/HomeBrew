import React, { Component } from 'react'
import { Link } from "react-router-dom";
import getApiData from "../../apiCalls";
import PropTypes from 'prop-types'
import cleanBeerData from '../../utilities'
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
            const cleanData = data.map(beer => cleanBeerData(beer))
            this.setState({singleBeer: cleanData[0]})
        })
    }
    
    handleClick = () => {
        const newState = this.state.singleBeer
        console.log('singleBeer = ',this.state.singleBeer)
        this.props.updateFavoritesState(newState)
    }

    render(){
        const{ name, tagline, description, abv, foodPairing, } = this.state.singleBeer
        return(
            <section className='single-beer-section'>
                <div>
                    <h2>{name}</h2>
                    <p>{tagline}</p>
                    <p className='description'>{description}</p>
                </div>
                <div>
                    <p> ABV {abv}</p>
                    <p className='food-pairing'>Some Pairing Recomendations: {foodPairing}</p>
                </div>
                <Link className="home-link" to={'/beers'}>
                    <p>Back to Home</p>
                </Link>
                <button className='add-favorite' onClick={this.handleClick}>Add to Favorites</button> 
            </section>
        )
    }
}

export default SingleBeer

SingleBeer.propTypes = {
    id:PropTypes.number,
    key:PropTypes.number,
    abv:PropTypes.number,
    name:PropTypes.string,
    tagline:PropTypes.string,
    description:PropTypes.string,
    foodPairing:PropTypes.string,
  }