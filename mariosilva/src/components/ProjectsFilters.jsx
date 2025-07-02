
import React, { useState } from "react";
import icons from '../data/icons.json';
import { useFilters } from '../app/store';
import FilterGroup from "./FilterGroup";
import { revelantIcons } from "../utils/filters";
import useToggle from "../hooks/useToggle";

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
  const filtersGrouped = /*icons*/revelantIcons.reduce((acc, icon) => {
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

  const { isActive, toggle, close } = useToggle();

  /* faz renderização */
  return (
    <section className="filters">

      <ul className="filtersMenuContainer">
        <li>
          <button onClick={toggle} className="filtersToggle">
            <span className="icon material-symbols-outlined ">{isActive ? "close" : "filter_alt"}</span>
          </button>
        </li>
      </ul>

      <ul className={`filtersGroup ${isActive ? "open" : "closed"}`}>
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