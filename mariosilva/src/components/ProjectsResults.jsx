import React from "react";
import courses from '../data/courses.json';
import projects from '../data/projects.json';

import ProjectCard from "./ProjectCard";
import { useFilters } from '../app/store';

console.log("courses: ", courses);
console.log("projects: ", projects);

const ProjectsResults = () => {
    const { activeFilters } = useFilters();

    /*
    console.log("Filter values:", activeFilters);
    projects.forEach(p => {
        console.log("→", p.pName, "| TOOLS:", p.pTools, "| FILTERS:", p.pFilters);
    });
    */

    const selectedCourse = courses
        .map(course => {
            const matchingProjects = projects.filter(project => {
                const isSameCourse = project.pCourse === course.cCourse;
                const matchesFilter =
                    activeFilters.length === 0 ||
                    activeFilters.some(filter =>
                        (project.pFilters || []).includes(filter) ||
                        (project.pTools || []).includes(filter)
                    );
                return isSameCourse && matchesFilter;
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