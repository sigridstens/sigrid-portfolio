import React from 'react';
import '../App.css';
import ProjectPreview from "../project-preview/project-preview";

export const projects = [
    {
        name: "Summer Nature Art Camp for Kids (SNACK)",
        type:"Graphic Design",
        role:"Branding & Illustration"
    },
    {
        name: "Our Saviour's Lutheran Church",
        type: "Graphic Design",
        role: "Branding & Identity Design"
    },
    {
        name:"Hoppy Trails: bikeable brewery crawls",
        type:"Graphic Design",
        role:"Branding & Identity Design"
    },
    {
        name:"Summer Nature Art Camp for Kids (SNACK)",
        type:"Graphic Design",
        role:"Graphic Design and Illustration"
    }



];


function Portfolio() {
    return(
        <main>
            <section className="filtering">
            </section>

            <section className="gallery">
                {projects.map(project => {
                    return (
                        <ProjectPreview
                            name={project.name}
                            type={project.type}
                            role={project.role}
                        />
                    )
                })}
            </section>
        </main>
    )
}

export default Portfolio;