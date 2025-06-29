export const filterByTool = (projects, tool) => {
  if (!tool) return projects;
  return projects.filter(project => project.tools.includes(tool));
};