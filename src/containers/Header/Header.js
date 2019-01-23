import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';
import logo from './logo.svg';

const Header = () => {
    return (
        <header>
            <div className={'logo'}>
                <NavLink to="/">
                    <img src={logo} alt="7ninjas logo"/>
                </NavLink>
            </div>
            <p className={'slogan'}>
                Front-End Developer<span>.</span>
            </p>
        </header>
    )
};

export default Header;