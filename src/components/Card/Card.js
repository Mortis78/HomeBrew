import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
  return (


        <Link to={`/${props.id}`}>
            <span className='beer-image-span'>
                <img className="beer-image" src={props.beerImage} alt={'img'} />
                <h3>{props.name}</h3>
            </span>
        <span className='beer-info'>
            <p>{props.tagline}</p>
            <p>{props.description}</p>
        </span>
        </Link>

    )
}

export default Card;

