import React from "react";
import projects from '../data/projects.json';

console.log(projects);


const ProjectCard = (project => project.map(({ x }) => (
    <article key={id} href="" className="projectCard">
        {/* aplicar img dentro do figure? ou aplicar background image ao article? */}
        <figure className="pMainImage"></figure>
        <h4 className="pName">{pName}</h4>
        <p className="pDescription close">{pDescription}</p>
        <a href="" className="pInnerLink close">{pInnerLink}</a>

        {/* fazer lógica para aplicar icones */}
        <div className="pTools close">
            <span className="material-symbols-outlined">person</span>
            <span className="material-symbols-outlined">person</span>
        </div>
        <div className="pFilters close">
            <span className="material-symbols-outlined">person</span>
            <span className="material-symbols-outlined">person</span>
        </div>
    </article>
))
)

export default ProjectCard;