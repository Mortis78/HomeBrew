import React from "react";
import Card from '../Card/Card'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import './Favorites.css'

const Favorites = (props) => {
    const favoritesCard = props.favorites.map(favorites => {
        return (
          <Card
            id={favorites.id}
            key={favorites.id}
            abv={favorites.abv}
            name={favorites.name}
            tagline={favorites.tagline}
            beerImage={favorites.beerImage}
            description={favorites.description}
            foodPairing={favorites.food_pairing}
          />
          
        )
      })
    
      return (
        <div className='favoritesCard-cards'>
          {favoritesCard}
          <Link className="home-link" to={'/beers'}>
                    <p>Back to Home</p>
          </Link>
        </div>
      )
    
}

export default Favorites

Favorites.propTypes = {
    id:PropTypes.number,
    key:PropTypes.number,
    abv:PropTypes.number,
    name:PropTypes.string,
    tagline:PropTypes.string,
    beerImage:PropTypes.string,
    description:PropTypes.string,
    foodPairing:PropTypes.string,
  }