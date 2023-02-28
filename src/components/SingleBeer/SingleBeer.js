import React from 'react';
import './SingleBeer.css';


const singlBeer = (props) => {
  return (
        <div className='beer-cards'>

            <span>
                <link>{link}</link>
            </span>
            <span>
                <h3>{name}</h3>
                <p>{tagline}</p>
                <p>{rating}</p>
                <p>{abv}</p>
            </span>
        </div>
    )
}

export default singleBeer;

