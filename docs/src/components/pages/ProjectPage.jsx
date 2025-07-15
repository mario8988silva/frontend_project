import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

import projects from "../../data/projects.json";
import icons from "../../data/icons.json";


function ProjectPage() {

    const { slug } = useParams();
    const project = projects.find(p => p.pSlug === slug);

    const {
        id,
        pName,
        pSlug,

        pDescription,
        pBriefingProblem,
        pBriefingSolution,
        pRole,
        pProcess,
        pAnalysisAndNotes,
        pInnerLink,
        pOutLink,

        pClientName,
        pClientLink,
        pClientDescription,

        pCourse,
        pTools,
        pFilters,
        pDuration,
        pYear,

        pImages

    } = project;

    const [openImage, setOpenImage] = useState(null);

    const toolsIcons = icons.filter(icon =>
        pTools?.some(tool => tool.trim().toLowerCase() === icon.label.trim().toLowerCase())
    );
    const filterIcons = icons.filter(icon =>
        pFilters?.some(filters => filters.trim().toLowerCase() === icon.label.trim().toLowerCase())
    );

    return (
        <>
            <section
                className="banner bannerProject"
                style={{ backgroundImage: `url(/${pImages?.[0]})` }}>
                <article className="bannerGreetings">
                    <h1>{pName}</h1>
                    <p>{pDescription}</p>
                    <aside className="currentPath">{`projects / ${pName}`}</aside>
                </article>
            </section>

            <main>
                <section className="pX">
                    <article className="pOverview">
                        <p className="pBriefingProblem">{pBriefingProblem}</p>
                        <p className="pBriefingSolution">{pBriefingSolution}</p>
                        <p className="pRole">{pRole}</p>
                        <p className="pProcess">{pProcess}</p>
                        <p className="pClienpAnalysisAndNotestName">{pAnalysisAndNotes}</p>
                        <a href={pInnerLink} target="_blank" className="pInnerLink">{pInnerLink}</a>
                        <a href={pOutLink} target="_blank" className="pOutLink">{pOutLink}</a>
                    </article>

                </section>

                <section className="pGridGalleryContainer">
                    {pImages?.map((src, index) => (
                        <figure
                            key={index}
                            className="pGalleryItem"
                            onClick={() => setOpenImage(`/${src}`)}
                        >
                            <img src={`/${src}`} alt={`Project Image ${index + 1}`} />
                        </figure>
                    ))}
                </section>
            </main>

            <section className="pClient">
                <article>
                    <h2 className="pClientName">{pClientName}</h2>
                    <a href={pClientLink} className="pClientLink">{pClientLink}</a>
                    <p className="pClientDescription">{pClientDescription}</p>
                    <p className="pCourse">Course: {pCourse}</p>
                </article>
            </section>

            <section className="pClosure">

                <article className="pIconsContainer">
                    <p>Tools Used:</p>
                    <figure className="pIcons">
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
                    </figure>
                    
                </article>

                <aside className="pYear">{pDuration}</aside>

                

                <nav className="currentPath">
                    <a href="" className="iconTextBtn">
                        <span className="icon material-symbols-outlined">west</span>
                        Previous Project
                    </a>
                    <a href="" className="iconTextBtn">
                        Next Project
                        <span className="icon material-symbols-outlined">east</span>
                    </a>
                </nav>
            </section>

            {openImage && (
                <div className="lightbox" onClick={() => setOpenImage(null)}>
                    <img src={openImage} alt="Full-size view" />
                </div>
            )}
        </>
    )
}

export default ProjectPage;