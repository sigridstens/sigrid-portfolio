import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/header.js';
import Home from './Home/home.js';
import About from './About/about.js';
import Contact from './Contact/contact';
import Portfolio from './Portfolio/portfolio.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">

          <h1>Sigrid Stensvold</h1>
          <h2>graphic & web designer</h2>

          <nav className="main-nav">
              <ul>
                  <li>Portfolio</li>
                  <li>Resume</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
          </nav>

          <img src={logo} className="App-logo" alt="logo" />

      </header>

        <Header />
        <Home />
        <About />
        <Contact />
        <Portfolio />

    </div>
  );
}

export default App;
