import React from "react";
import courses from '../data/courses.json';
import projects from '../data/projects.json';

import ProjectCard from "./ProjectCard";
import { useFilters } from '../app/store';


import { groupFiltersByCategory } from "../utils/filters";

//console.log("courses: ", courses);
//console.log("projects: ", projects);


const ProjectsResults = () => {
    const { activeFilters } = useFilters();



    const selectedCourse = courses
        .map(course => {
            const matchingProjects = projects.filter(project => {
                const isSameCourse = project.pCourse === course.cCourse;

                const searchableLabels  = Object.entries(filtersByCategory).every(([label, category]) => {
                    const target = (() => {
                        if (label === "tools") return project.pTools || [];
                        if (label === "context") return project.pFilters || [];
                        if (label === "school") return project.pClientName || [];
                        return [];
                    })();

                    return values.some(v => target.includes(v));
                }
            );
            /*
                    activeFilters.length === 0 ||
                    activeFilters.some(filter =>
                        (project.pFilters || []).includes(filter) ||
                        (project.pTools || []).includes(filter)
                    );
            */
                return isSameCourse && (activeFilters.length === 0 || matchesAllActiveCategories) ;
            });

            return {
                ...course,
                projects: matchingProjects,
            };
            
        })

        // esconde container/header que não contenha projectos:
        .filter(course => course.projects.length > 0);

    return (
        <section className="results">
            {selectedCourse.map(({ id, cPeriod, cSchool, cCourse, cHours, projects: courseProjects }) => (

                <article key={id} className="projectsSchools">

                    <div className="timeline"></div>

                    <header className="iconTextBtn schoolContainer">
                        <span className="timelineDot"></span>

                        <h2>
                            <span id="schoolPeriod">{cPeriod}</span>
                            <span> · </span>
                            <span id="schoolName">{cSchool}</span>
                            <span> · </span>
                            <span id="schoolCourse">{cCourse}</span>
                            <span id="courseHours"> ({cHours}h)</span>
                        </h2>
                    </header>

                    <nav className="projectCardContainer">
                        <ProjectCard projects={courseProjects} />
                    </nav>
                </article>
            )
            )}
        </section>
    );
};
export default ProjectsResults;
