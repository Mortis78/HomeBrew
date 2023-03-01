import React from 'react';
import './Card.css';


const Card = (props) => {
  return (
        <div className='beer-cards'>
            <span>
                <link>{link}</link>
                <h3>{name}</h3>
                <p>{tagline}</p>
                <p>{rating}</p>
                <p>{abv}</p>
            </span>
        </div>
    )
}

export default Card;

