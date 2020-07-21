import React from 'react';
import './header.css';
import {Route} from "react-router";
import Portfolio from "../Portfolio/portfolio";
import Resume from "../Resume/resume";
import About from "../About/about";
import Contact from "../Contact/contact";
import logo from "../logo.svg";
import {Link} from 'react-router-dom';


function Header() {
    return(
        <header className="App-header">

            <Link to="/">
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