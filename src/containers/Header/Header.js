import React from 'react';
import './Header.css';
import logo from './logo.svg';

const Header = () => {
    return(
        <header>
            <div className={'logo'}>
                <img src={logo} alt="7ninjas logo"/>
            </div>
            <p className={'slogan'}>
                Front-End Developer<span>.</span>
            </p>
        </header>
    )
};

export default Header;