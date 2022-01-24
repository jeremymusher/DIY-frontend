import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            <Link to={"/"} className="homeButton">
            <h1>DIY</h1>
            </Link>
            <Link to={"/new"} className='newPostButton'>
                <button> Create a New Post</button>
            </Link>
        </div>
    );
}

export default Header;