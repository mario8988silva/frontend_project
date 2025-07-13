import React from "react";
import projects from '../data/projects.json';
import icons from '../data/icons.json';
import { useState } from "react";

console.log(projects);
console.log(icons);

const ProjectCard = ({ projects }) => {

    const [openCardId, setOpenCardId] = useState(null);

    const handleToogle = (id) => {
        setOpenCardId(prev => (prev === id ? null : id));
    };

    return (
        <>
            {projects.map(({ id, pName, pDescription, pInnerLink, pTools, pFilters, pImages }) => {

                const mainImage = pImages?.[0] || null;
                const isOpen = openCardId === id;

                const toolsIcons = icons.filter(icon => pTools?.includes(icon.label));
                const filterIcons = icons.filter(icon =>
                    pFilters?.includes(icon.label) &&
                    icon.category !== "schools"
                );

                return (
                    <article
                        key={id}
                        className={`projectCard clickable ${isOpen ? "open" : ""}`}
                        onClick={() => handleToogle(id)}
                    >

                        {/* aplicar img dentro do figure? ou aplicar background image ao article? */}
                        <figure className="pMainImage">
                            {mainImage && <img src={mainImage} alt={`${pName} main`} />}
                        </figure>
                        
                        {pInnerLink ? (
                            <a
                                href={pInnerLink}
                                className="btn"
                                target="_blank"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {pName}
                            </a>
                        ) : (
                            <a
                                className="btn disabled"
                            >
                                {pName}
                            </a>
                        )}

                        <p className="pDescription">{pDescription}</p>
                        
                        {/*}
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
                        {*/}
                    </article>
                )
            })}
        </>
    );
};
export default ProjectCard;