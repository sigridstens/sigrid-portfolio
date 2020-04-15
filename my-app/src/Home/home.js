import React from 'react';
import './home.css';



function Home() {
    return(
        <div>

            <img src={process.env.PUBLIC_URL + 'images/collage-05.png'} />

            <main>
                <section className="col col-two">

                    <p>I am a designer specializing in web design, front-end development, interaction design and branding.</p>
                </section>

                <section className="col col-one">
                    <img src={process.env.PUBLIC_URL + 'images/sigrid-bio.png'} alt="Headshot photo of Sigrid" className="bio-pic"/>
                        <p >I like to create multidimensional, interactive experiences on the web, in built spaces, and through printed materials.</p>
                </section>
            </main>
        </div>
    )
}

export default Home;
