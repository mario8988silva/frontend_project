import icons from "../data/icons.json";

export const groupFiltersByCategory = (activeLabels) => {
  const categoryMap = {};

  activeLabels.forEach(label => {
    const icon = icons.find(icon => icon.label === label);
    if (!icon) return;

    const cat = icon.category;
    categoryMap[cat] = categoryMap[cat] || [];
    categoryMap[cat].push(label);
  });
  return categoryMap;
};

/* lógica para inserir projectos nos devidos cursos */
export const filterProjectByCourse = (projects, courseCode) => {
  return projects.filter(
    (project) => project.pCourse === courseCode);
};


