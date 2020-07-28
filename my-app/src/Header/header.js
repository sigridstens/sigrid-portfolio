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
                        <Link to="/portfolio">Work</Link>
                        <ul>
                            <li>
                                <Link to="/portfolio">Graphic Design</Link>
                            </li>

                            <li>
                                <Link to="/portfolio">Illustration</Link>
                            </li>

                            <li>
                                <Link to="/portfolio">Motion Design</Link>
                            </li>

                            <li>
                                <Link to="/portfolio">Painting</Link>
                            </li>

                            <li>
                                <Link to="/portfolio">Web Development</Link>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <Link to="/resume">Resume</Link>
                    </li>
                    <li>
                        <Link to="/about">About Me</Link>
                    </li>

                    <li>
                        <a href="mailto:sigridstensvold@gmail.com">Get in Touch</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;