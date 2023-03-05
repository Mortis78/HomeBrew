import React from 'react'
import Card from '../Card/Card'
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
      {beerCards}
    </div>
  )
}

export default Beers