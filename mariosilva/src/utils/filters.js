import icons from "../data/icons.json";

/* botões filtros */
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

export const projectMatchesFilters = (project, filterByCategory) => {
  return Object.entries(filterByCategory).every(([category, labels]) => {
    if (labels.length === 0) return true;

    const field = (() => {
      if (category === "tools") return project.pTools || [];
      if (category === "fields") return project.pFilters || [];
      if (category === "context") return project.pFilters || [];
      if (category === "schools") return project.pFilters || [];
      return [];
    })();

    return labels.every((label) => field.includes(label));
  });
}


/* lógica para inserir projectos nos devidos cursos */
export const filterProjectByCourse = (projects, courseCode) => {
  return projects.filter(
    (project) => project.pCourse === courseCode);
};


