import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <NavLink to="/" className="brand-logo">React Basics</NavLink>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
