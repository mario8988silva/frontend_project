import { projectMatchesFilters } from "./filters";

export const getFilteredCourses = (courses, projects, filtersByCategory) => {
  return courses.map((course) => ({
    ...course,
    projects: projects
      .filter((p) => p.pCourse === course.cCourse)
      .filter((p) => projectMatchesFilters(p, filtersByCategory)),
  }));
};
