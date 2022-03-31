import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/about">About</Link>
            <Link to='/posts' >Posts</Link>
            </nav>
            <h1>Welcome</h1>

        </div>
    );
};

export default Header;