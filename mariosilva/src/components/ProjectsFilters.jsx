
import React, { useState } from "react";

import { useFilters } from '../app/store';
import { revelantIcons } from "../utils/filters";

import FilterGroup from "./FilterGroup";
import { useToggleFilter } from "../hooks/useToggleFilter.js";
import { groupingFilters } from "../utils/groupingFilters.js";



const ProjectsFilters = ({ isOpen }) => {

 /* toogle para botões */
 const { activeFilters, setActiveFilters } = useFilters();
 const toggleFilter = useToggleFilter(setActiveFilters);

  /* lógica para listar conteudos por categoria */
  const filtersGrouped = groupingFilters;
  console.log("filtersGrouped: ", filtersGrouped);

  /* faz renderização */
  return (
    <section className={`filters ${isOpen ? "open" : "closed"}`} aria-label="click here to open or close the filters tab">

      <ul className={"filtersGroup"}>

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