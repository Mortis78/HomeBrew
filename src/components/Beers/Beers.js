import React, { useState } from 'react';
import Card from '../Card/Card'
import Header from '../Header/Header';
import './Beers.css'


const Beers = (props) => {

  const beerCards = props.beers.map(beer => {
    return (
      <Card
        id={beer.id}
        key={beer.id}
        name={beer.name}
        tagline={beer.tagline}
        description={beer.description}
        beerImage={beer.image}
      />
    )
  })

  return (
    <div className='beer-cards'>
      < Header />
      {beerCards}
    </div>
  )
}

export default Beers