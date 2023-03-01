import React from 'react';
import './Card.css';


const Card = ({ id, name, tagline, description, beerImage }) => {
  return (
        <div className='beer-cards'>
            <img className="beer-image" src={beerImage} alt={'img'} />
            <span>
                <h3>{name}</h3>
                <p>{tagline}</p>
                <p>{description}</p>
            </span>
        </div>
    )
}

export default Card;

