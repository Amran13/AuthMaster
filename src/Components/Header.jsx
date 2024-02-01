import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    // const isActive = false;
    return (
        <div className="navbar bg-primary text-primary-content">
            <button className="btn btn-ghost text-xl">Auth Master</button>

            <NavLink to="/" className={({ isActive }) => `mx-2 ${isActive ? 'text-red-500' : ''}`}> Home </NavLink>
            <NavLink to="/login" className={({ isActive }) => `mx-2 ${isActive ? 'text-red-500' : ''}`}> Login </NavLink>
            <NavLink to="/register" className={({ isActive }) => `mx-2 ${isActive ? 'text-red-500' : ''}`}> Register </NavLink>

        </div>
    );
};

export default Header;