import React from 'react'
import Card from '../Card/Card'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './Beers.css'

const Beers = (props) => {

  const beerCards = props.beers.map(beer => {
    return (
      <Card
        id={beer.id}
        key={beer.id}
        abv={beer.abv}
        name={beer.name}
        tagline={beer.tagline}
        beerImage={beer.beerImage}
        description={beer.description}
        foodPairing={beer.food_pairing}
      />
    )
  })

  return (
    <div className='beer-cards'>
      <Link className='Favorites-link' to={'/Favorites'}>
        Go to Favorites
        </Link>
      {beerCards}
    </div>
  )
}

export default Beers

Beers.propTypes = {
  id:PropTypes.number,
  key:PropTypes.number,
  abv:PropTypes.number,
  name:PropTypes.string,
  tagline:PropTypes.string,
  beerImage:PropTypes.string,
  description:PropTypes.string,
  foodPairing:PropTypes.string,
}