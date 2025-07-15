import React from "react";
import courses from '../data/courses.json';
import projects from '../data/projects.json';

import ProjectCard from "./ProjectCard";
import { useFilters } from '../app/store';


import { groupFiltersByCategory, projectMatchesFilters } from "../utils/filters";
import CourseArticle from "./CourseArticle";

const coursesData = courses;
const projectsData = projects;


const ProjectsResults = () => {

  /* chama lista de cursos */
  const courseList = coursesData;
  console.log("courseList: ", courseList);

  /* chama lista de projectos */
  const projectsList = projectsData;
  console.log("projectsList: ", projectsList);

  const { activeFilters } = useFilters();
  const filtersByCategory = groupFiltersByCategory(activeFilters);

  const filteredCourses = coursesData.map((course) => {
    const courseProjects = projectsData
      .filter((p) => p.pCourse === course.cCourse)
      .filter((p) => projectMatchesFilters(p, filtersByCategory));

    return {
      ...course,
      projects: courseProjects,
    };
  })

  /* esconde todos os cursos que não constenham projectos resultantes */
    //.filter((course) => course.projects.length > 0);

  /*renderiza lista de cursos */
  return (
    <section className="results">
      {filteredCourses.map((course) => (
        <CourseArticle
          key={course.id}
          course={course}
          projects={course.projects}
        />
      ))}
    </section>
  );
};

export default ProjectsResults;
