import React from 'react';
import './Card.css';


const Card = ({ id, name, tagline, description, beerImage }) => {
  return (
        <div className='beer-cards'>
            <span className='beer-image-span'>
            <img className="beer-image" src={beerImage} alt={'img'} />
            </span>
            <span className='beer-info'>
                <h3>{name}</h3>
                <p>{tagline}</p>
                <p>{description}</p>
            </span>
        </div>
    )
}

export default Card;

