import React from "react";
import { Link } from 'react-router-dom'



const ErrorPage = () => {
    return (
        <div className="errorPage">
            {/* <div className="oops"></div> */}
            <h1>404 Error</h1>
            <h2>Sorry, this isnt a place that will be fullfilling in any way!</h2>
            <p>This link will take you back home:</p>
            <Link to='/beers'>Home</Link>
        </div>
    )
}
export default ErrorPage