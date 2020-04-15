import React from 'react';
import './App.css';
import Header from './Header/header.js';
import Home from './Home/home.js';
import About from './About/about.js';
import Contact from './Contact/contact';
import Portfolio from './Portfolio/portfolio.js';
import Resume from './Resume/resume.js';
import Footer from './Footer/footer.js';
import {Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
        <Footer />
    </div>
  );
}

export default App;
