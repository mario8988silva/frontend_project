
import React from "react";
import icons from '../data/icons.json';
import { useFilters } from '../app/store';

console.log("icons.json: ", icons);

const ProjectsFilters = () => {

  /* toogle para botões */
const { activeFilters, setActiveFilters } = useFilters();

const toogleFilter = (label) => {
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
          <li key={category} className="filtersContainer">
            <h3>{category}:</h3>
            <ul>

              {items.map(({ id, label, value, type }) => (
                <li key={id}>
                  <button
                    className={`iconTextBtn ${
                      activeFilters.includes(label) ? "active" : ""
                    }`}
                    onClick={() => toogleFilter(label)}
                  >
                    {type === "fonts-google" ? (
                      <span className="icon material-symbols-outlined">{value}</span>
                    ) : (
                      <img className="icon" src={value} alt={label} />
                    )}
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