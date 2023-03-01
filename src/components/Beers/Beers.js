import React, { useState } from 'react';
import Card from '../Card/Card'
import './Beers.css'


const Beers = (props) => {

  const beerCards = props.beers.map(beer => {
    return (
      <Card
        id={beer.id}
        key={beer.id}
        name={beer.name}
        description={beer.description}
        tagline={beer.tagline}
        image={beer.image}
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