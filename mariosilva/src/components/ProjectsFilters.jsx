
import React from "react";
import icons from '../data/icons.json';
import { useFilters } from '../app/store';

//console.log(icons);

const ProjectsFilters = () => {
  const { activeFilters, setActiveFilters } = useFilters();

  const toggleFilter = (value) => {

    console.log("BOTÃO CLICADO:", value);

    setActiveFilters((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]
    );
    console.log("FILTROS ACTIVOS:", activeFilters);
  };

  const iconsGroups = icons.reduce((acc, icon) => {
    if (icon.category === "contact") return acc;
    acc[icon.category] = acc[icon.category] || [];
    acc[icon.category].push(icon);
    return acc;
  }, {});

  return (
    <section id="filters" className="filters">
      <ul>
        {Object.entries(iconsGroups).map(([category, items]) => (
          <li key={category} className="filtersContainer">
            <h3>{category}:</h3>
            <ul>
              {items.map(({ id, label, value }) => (
                <li key={id}>
                  <button
                    className={`iconTextBtn ${activeFilters.includes(label) ? "active" : ""
                      }`}
                    onClick={() => toggleFilter(label)}
                  >
                    <span className="icon material-symbols-outlined">{value}</span>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsFilters;