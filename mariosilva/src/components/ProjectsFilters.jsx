
import React from "react";
import icons from '../data/icons.json';
import { useFilters } from '../app/store';
import FilterGroup from "./FilterGroup";

console.log("icons.json: ", icons);

const ProjectsFilters = () => {

  /* toogle para botões */
  const { activeFilters, setActiveFilters } = useFilters();

  const toggleFilter = (label) => {
    setActiveFilters((prev) =>
      prev.includes(label)
        ? prev.filter((f) => f !== label)
        : [...prev, label]
    );
  }


  /* lógica para listar conteudos por categoria */
  const filtersGrouped = icons.reduce((acc, icon) => {
    /* selecciona aqueles que contenham category:"contact" */
    if (icon.category === "contact") return acc;

    /* todos aqueles que não sejam "contact" */
    if (!acc[icon.category]) {
      acc[icon.category] = [];
    }
    acc[icon.category].push(icon);
    return acc;
  }, {});
  console.log("filtersGrouped: ", filtersGrouped);



  /* faz renderização */
  return (
    <section className="filters">
      <ul>

        {Object.entries(filtersGrouped).map(([category, items]) => (
          <FilterGroup
            key={category}
            category={category}
            items={items}
            activeFilters={activeFilters}
            onToggle={toggleFilter}
          />
        ))}

      </ul>
    </section>
  );
};

export default ProjectsFilters;