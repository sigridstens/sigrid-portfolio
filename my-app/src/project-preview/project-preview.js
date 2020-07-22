import React from 'react';
import '../App.css';


function ProjectPreview(props) {
    console.log(props)
    return(
        <div className="project-preview">
            <h2>{props.name}</h2>
            <h3>{props.type}</h3>
            <h3>{props.role}</h3>
        </div>
    )
}

export default ProjectPreview;