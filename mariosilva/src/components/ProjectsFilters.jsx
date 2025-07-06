
import React, { useState } from "react";
import icons from '../data/icons.json';
import { useFilters } from '../app/store';
import FilterGroup from "./FilterGroup";
import { revelantIcons } from "../utils/filters";
import useToggle from "../hooks/useToggle";

console.log("icons.json: ", icons);

const ProjectsFilters = ({ isOpen }) => {

  /* toogle para botões */
  const { activeFilters, setActiveFilters } = useFilters();

  const toggleFilter = (label) => {
    const icon = revelantIcons.find((icon) => icon.label === label);
    const category = icon?.category;


    setActiveFilters((prev) => {
      const isActive = prev.includes(label);

      if (category === "schools") {
        return isActive ? [] : [label];
      }

      return isActive
        ? prev.filter((f) => f !== label)
        : [...prev, label]
    });
  };



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

  const resetItem = icons.find(f => f.label === "Reset" && f.type === "fonts-google");
  const resetFilters = () => {
    setActiveFilters([]);
  };
  console.log("Reset Button: ", resetItem);

  /* faz renderização */
  return (
    <section className={`filters ${isOpen ? "open" : "closed"}`}>

      <ul className={"filtersGroup"}>

        <li key="resetButton" className="filtersItem resetButton">
          <button className="iconTextBtn" onClick={resetFilters}>
            <span className="icon material-symbols-outlined">{resetItem.value}</span>
            {resetItem.label}
          </button>
        </li>

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