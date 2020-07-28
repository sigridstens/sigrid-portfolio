import React from 'react';
import '../App.css';


function About() {
    return(
        <main className="col-container">
            <figure className="col col-one">
                <img src={process.env.PUBLIC_URL + '/images/sigrid.jpg'} className="biopic" alt="Sigrid's profile" />
            </figure>

            <section className="col col-two">
                <h1>Hi there! I'm Sigrid Stensvold, a Minneapolis-based designer, illustrator, & web developer.</h1>

                <p>I am an artist with a wide variety of interests and experiences who specializes in creating lively designs, whimsical illustrations, and intuitive web experiences. </p>

                <p>When I am not working on school projects or freelance work, you might find me attempting to garden, plotting my next long distance bike tour, or cooking up something spontaneous in my kitchen.</p>

                <p>Looking for a fresh perspective on an upcoming project in one of these areas? Let's connect!</p>
            </section>
        </main>

)
}





export default About;