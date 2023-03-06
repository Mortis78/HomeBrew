import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Card.css';

const Card = (props) => {
  return (

    <section>
        <Link className='beer-link' to={`/${props.id}`}>
            <span className='beer-image-span'>
                <img className="beer-image" src={props.beerImage} alt={'img'} />
                <h3 className='beer-name'>{props.name}</h3>
            </span>
        </Link>
        <span className='beer-info'>
            <p>{props.tagline}</p>
        </span>
    </section>
    )
}

export default Card;

Card.propTypes = {
    id: PropTypes.number,
    name:PropTypes.string,
    beerImage: PropTypes.string,
  }