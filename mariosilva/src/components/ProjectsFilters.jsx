import React from "react";
import icons from '../data/icons.json';

console.log(icons);

const iconsGroups = icons.reduce((acc, icon) => {
    if (icon.category === "contact") return acc;

    if (!acc[icon.category]) {
        acc[icon.category] = [];
    }

    acc[icon.category].push(icon);
    return acc;
}, {});


const FilterItems = (items =>
    items.map(({ id, label, value }) => (
        <li key={id}>
            <button className="iconTextBtn">
                <span className="icon material-symbols-outlined">{value}</span>
                {label}
            </button>
        </li>
    ))
)


const filtersList = Object.entries(iconsGroups).map(([category, items]) => (
    <li key={category} className="filtersContainer">
        <h3>{category}:</h3>
        <ul>{FilterItems(items)}</ul>
    </li>
));


const ProjectsFilters = () => {
    return (
        <section id="filters" className="filters">
            <ul>{filtersList}</ul>
        </section>
    )
}

export default ProjectsFilters;