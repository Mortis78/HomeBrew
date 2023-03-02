import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';


const Card = ({ id, name, tagline, description, beerImage }) => {
  return (
        <NavLink to={`/${props.id}`}>
            <span className='beer-image-span'>
                <img className="beer-image" src={beerImage} alt={'img'} />
            </span>
            <span className='beer-info'>
                <h3>{name}</h3>
                <p>{tagline}</p>
                <p>{description}</p>
            </span>
        </NavLink>
    )
}

export default Card;

