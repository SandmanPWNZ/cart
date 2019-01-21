import React from 'react';
import {NavLink} from "react-router-dom";

//styles
import './Home.scss';

const Home = () => (
    <div className={'wrapper'}>
        <p>Hi and Welcome!</p>
        <NavLink to={"/cart"}>Cart</NavLink>
    </div>
);

export default Home;