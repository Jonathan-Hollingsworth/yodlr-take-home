import React from "react";
import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <div className="navbar">
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/admin'>Admin</NavLink>
            <NavLink to='/register'>Register</NavLink>
        </div>
    )
}

export default Nav;