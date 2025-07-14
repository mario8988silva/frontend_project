import React from "react";
import { useParams } from "react-router-dom";

import projects from "../../data/projects.json";

import Header from "../Header";
import Footer from "../Footer";


function ProjectPage() {

    const { slug } = useParams();
    const project = projects.find(p => p.pSlug === slug);

    if (!project) return <div>ERRO!</div>;

    return (
        <>
            <section className="pBanner">
                <article>
                    <h1>pName</h1>
                    <p>
                        pDescription Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium optio ratione sequi alias dolores? Dolorem mollitia
                        doloribus quidem odit expedita!
                    </p>
                    <aside className="currentPath">currentPath</aside>
                </article>
            </section>

            <main>
                <section className="pContent">
                    <article className="pOverview">
                        <p>{/* about the project */}</p>
                    </article>

                    <aside>
                        {/* images */}
                        <figure className="pGallery"></figure>
                    </aside>
                </section>
            </main>

            <section className="pClient">
                <article>
                    <p className="pBriefingProblem"></p>
                    <p className="pBriefingSolution"></p>
                    <p className="pBurden"></p>
                    <p className="pProcess"></p>
                    <a href="" className="pOutLink"></a>
                    <p className="pAnalysisAndNotes"></p>
                </article>
            </section>

            <section className="pClosure">
                <figure className="pTools"></figure>
                <figure className="pFilters"></figure>
                <aside className="pYear"></aside>
                <nav>
                    <a href="">
                        <img src="" alt="arrowLeft" /> Previous Project
                    </a>
                    <a href="">
                        Next Project <img src="" alt="arrowRight" />
                    </a>
                </nav>
            </section>

        </>
    )
}

export default ProjectPage;