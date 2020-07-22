import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';


function Header() {
    return(
        <header className="App-header">

            <Link to="/" className="logo">
                <h1>Sigrid Stensvold</h1>
                <h2>graphic & web designer</h2>
            </Link>

            <nav className="main-nav">
                <ul>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/resume">Resume</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;