import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            <Link to={"/"} className="homeButton">
            <h1>DIY</h1>
            </Link>
        </div>
    );
}

export default Header;