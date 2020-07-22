import React from 'react';
import '../App.css';
import ProjectPreview from "../project-preview/project-preview";


function Portfolio() {
    return(
        <main>
            <section className="filtering">
                <button type="button" onClick=filter>Graphic Design</button>
            </section>
            <section className="gallery">
                <ProjectPreview
                    name="Summer Nature Art Camp for Kids (SNACK)"
                    type="Graphic Design"
                    role="Branding & Illustration"
                />

                <ProjectPreview
                    name="Our Saviour's Lutheran Church"
                    type="Graphic Design"
                    role="Branding & Identity Design"
                />

                <ProjectPreview
                    name="Hoppy Trails: bikeable brewery crawls"
                    type="Graphic Design"
                    role="Branding & Identity Design"
                />

                <ProjectPreview
                    name="Summer Nature Art Camp for Kids (SNACK)"
                    type="Graphic Design"
                    role="Graphic Design and Illustration"
                />
            </section>
        </main>
    )
}

export default Portfolio;