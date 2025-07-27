import React from "react";

import courses from '../data/courses.json';
import projects from '../data/projects.json';

import { useFilters } from '../app/store';
import { groupFiltersByCategory } from "../utils/filters";
import { getFilteredCourses } from "../utils/getFilteredCourses";

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
  const filteredCourses = getFilteredCourses(coursesData, projectsData, filtersByCategory);

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
