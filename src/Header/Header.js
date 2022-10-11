import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="navbar bg-indigo-100 px-24 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/statistics'>Statistics</NavLink>
                            <NavLink to='blog'>Blog</NavLink>
                        </ul>
                    </div>
                    <Link to='/' className='text-2xl md:text-3xl font-semibold'><span className='text-indigo-700 font-bold'>Quiz</span>Time</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-5 font-semibold">
                        <NavLink className={({ isActive }) => 'underline' + isActive ? 'active' : ''} to='/'>Home</NavLink>
                        <NavLink to='/statistics'>Statistics</NavLink>
                        <NavLink to='blog'>Blog</NavLink>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Header;