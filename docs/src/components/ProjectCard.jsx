import React from "react";
import projects from '../data/projects.json';
import icons from '../data/icons.json';
import { useState } from "react";

import { Link } from "react-router-dom";

const ProjectCard = ({ projects }) => {

    const [openCardId, setOpenCardId] = useState(null);

    const handleToogle = (id) => {
        setOpenCardId(prev => (prev === id ? null : id));
    };

    return (
        <>
            {projects.map(({ id, pName, pSlug, pStatus, pDescription, pInnerLink, pTools, pFilters, pImages }) => {

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

                        {pStatus === "ready" ? (
                            /*
                            <a

                                href={pInnerLink}
                                className="btn"
                                target="_blank"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {pName}
                            </a>
                            */
                            <Link

                                to={`/projects/${pSlug}`}
                                className="btn"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {pName}
                            </Link>

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