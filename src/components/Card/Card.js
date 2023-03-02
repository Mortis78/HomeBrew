import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';


const Card = ({ id, name, tagline, description, beerImage }) => {
  return (
    <div>

        <NavLink to={`/${id}`}>
            <span className='beer-image-span'>
                <img className="beer-image" src={beerImage} alt={'img'} />
                <h3>{name}</h3>
            </span>
        </NavLink>
        <span className='beer-info'>
            <p>{tagline}</p>
            <p>{description}</p>
        </span>
    </div>
    )
}

export default Card;

