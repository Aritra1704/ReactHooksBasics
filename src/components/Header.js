import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () =>  (
    <header>
        <h1>Notes App</h1>
        <NavLink to="/" activeClassName="is-active" exact={true} >Note App</NavLink>
        <NavLink to="/buttons" activeClassName="is-active" >Buttons</NavLink>
    </header>
);

export default Header;