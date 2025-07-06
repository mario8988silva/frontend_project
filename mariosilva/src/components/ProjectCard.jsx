import React from "react";
import projects from '../data/projects.json';
import icons from '../data/icons.json';

console.log(projects);
console.log(icons);

/*
<article href="" class="projectCard">
    <figure class="pMainImage"></figure>
    <h4 class="pName">pName</h4>
    <p class="pDescription">Lorem ipsum dolor sit amet consectetur. Nibh amet tristique purus enim eleifend risus etiam fermentum dictum. Aliquam felis feugiat lacus commodo eget aliquet.</p>
    <a href="" class="pInnerLink">pInnerLink</a>
    <div class="pTools">
        <span class="material-symbols-outlined">person</span>
        <span class="material-symbols-outlined">person</span>
    </div> <div class="pFilters">
        <span class="material-symbols-outlined">person</span>
        <span class="material-symbols-outlined">person</span>
    </div>
</article>
*/

const ProjectCard = ({ projects }) => {
    return (
        <>
            {projects.map(({ id, pName, pDescription, pInnerLink, pTools, pFilters, pImages }) => {

                const mainImage = pImages?.[0] || null;
                const toolsIcons = icons.filter(icon => pTools?.includes(icon.label));
                const filterIcons = icons.filter(icon => pFilters?.includes(icon.label));

                return (
                    <article
                        key={id}
                        className="projectCard">
                        {/* aplicar img dentro do figure? ou aplicar background image ao article? */}
                        <figure className="pMainImage">
                            {mainImage && <img src={mainImage} alt={`${pName} main`} />}
                        </figure>

                        <h4 className="pName">{pName}</h4>
                        <p className="pDescription close">{pDescription}</p>



                        {pInnerLink && (
                            <a href={pInnerLink} className="pInnerLink" target="_blank">
                                View Project
                            </a>
                        )}

                        {/* fazer lógica para aplicar icones */}
                        <div className="pTools">
                            {toolsIcons.map(({ id, value, label, type }) =>
                                type === "fonts-google" ? (
                                    <span key={id}
                                        className="material-symbols-outlined">{value}</span>
                                    ) : (
                                        <img key={id} src={value} alt={label} className="icon" />
                                    )
                                )}
                        </div>

                        <div className="pFilters">
                            {filterIcons.map(({ id, value, label, type }) =>
                                type === "fonts-google" ? (
                                    <span key={id}
                                        className="material-symbols-outlined">{value}</span>
                                    ) : (
                                        <img key={id} src={value} alt={label} className="icon" />
                                    )
                                )}
                        </div>
                    </article>
                )
            })}
        </>
    );
};
export default ProjectCard;