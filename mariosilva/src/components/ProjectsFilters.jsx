import React from "react";
import filters from '../data/filters.json';

console.log(filters);

const filterGroups = filters.reduce((acc, filter) => {
    if (filter.category === "contact") return acc;

    if (!acc[filter.category]) {
        acc[filter.category] = [];
    }

    acc[filter.category].push(filter);
    return acc;
}, {});


const FilterItems = (items =>
    items.map(({ id, label, value }) => (
        <li key={{ id }}>
            <button className="iconTextBtn">
                <span className="icon material-symbols-outlined">{value}</span>
                {label}
            </button>
        </li>
    ))
)


const filtersList = Object.entries(filterGroups).map(([category, items]) => (
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