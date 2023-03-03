import React from "react";
import './Header.css'


function Header(){
    return(
        <div className="header-container">
            <img src="../../beerTaps.png" alt="Beer Taps"/>
            <h1 className='Header'>Home Brew</h1>
        </div>
    )
}

export default Header