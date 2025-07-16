import icons from "../data/icons.json";
import projects from "../data/projects.json";
console.log("total de filtros: ", icons);
/* botões de filtragem */
/* construcção da secção de botões */
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



/* lógica da função de filtragem */
export const projectMatchesFilters = (project, filterByCategory) => {
  return Object.entries(filterByCategory).every(([category, labels]) => {
    console.log("FILTROS ACTIVOS: ", labels);
    if (labels.length === 0) return true;

    const field = (() => {
      if (category === "tools") return project.pTools || [];
      if (["fields", "context", "schools"].includes(category)) return project.pFilters || [];
      return [];
    })();

    if (category === "schools") {
      return labels.some((label) => field.includes(label));
    }

    return labels.every((label) => field.includes(label));
  });
  
}

/* apenas mostra filtros em uso a partir do projects.json */


/* Apenas apresenta botões que estejam a ser utilizados */
const usedLabels = new Set(
  projects.flatMap((p) => [
    ...(p.pFilters || []),
    ...(p.pTools || [])
  ])
);
export const revelantIcons = icons.filter(icon =>
  usedLabels.has(icon.label)
);

console.log("FILTROS EM USO: ", usedLabels);


/* lógica para inserir projectos nos devidos cursos */
export const filterProjectByCourse = (projects, courseCode) => {
  return projects.filter(
    (project) => project.pCourse === courseCode);
};


