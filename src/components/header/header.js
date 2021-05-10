import React from 'react';
// import styled from 'styled-components';
import './header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-block'>
            <h3 className='header-title'>
                <Link to='/'>
                    Game of Thrones DB
                </Link>
            </h3>
            <ul className='header-links'>
                <li>
                    <Link to='/characters/'>Characters</Link>
                </li>
                <li>
                    <Link to='/houses/'>Houses</Link>
                </li>
                <li>
                    <Link to='/books/'>Books</Link>   
                </li>
            </ul>
        </div>
    );
};

export default Header;