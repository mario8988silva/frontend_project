import React from "react";
import courses from '../data/courses.json';
import projects from '../data/projects.json';

import ProjectCard from "./ProjectCard";
import { useFilters } from '../app/store';


import { groupFiltersByCategory } from "../utils/filters";
import CourseArticle from "./CourseArticle";

console.log("courses: ", courses);
console.log("projects: ", projects);

const coursesData = courses;
const projectsData = projects;

console.log("courses variable: ", coursesData);
console.log("projects variable: ", projectsData);


const ProjectsResults = () => {

  /* chama lista de cursos */
  const courseList = coursesData;
  console.log("courseList: ", courseList);

  /* chama lista de projectos */
  const projectsList = projectsData;
  console.log("projectsList: ", projectsList);



  /*
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
            *//*
return isSameCourse && (activeFilters.length === 0 || matchesAllActiveCategories) ;
});

return {
...course,
projects: matchingProjects,
};
 
})

// esconde container/header que não contenha projectos:
.filter(course => course.projects.length > 0);
*/


  /*renderiza lista de cursos */
  return (
    <section className="results">
      {courseList.map((course) => (
        <CourseArticle key={course.id} course={course} projects={projectsList} />
      ))}
    </section>
  );
};

export default ProjectsResults;
