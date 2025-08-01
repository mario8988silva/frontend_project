import React from "react";
import FilterButton from './FilterButton';

const FilterGroup = ({ category, items, activeFilters, onToggle }) => {
    return (
        <li key={category} className="filtersContainer">
            <h3 aria-label={`here you can find those filter buttons relative to ${category} category.`}>{category}:</h3>
            <ul>
                {items.map((icon) => (
                    <FilterButton
                        key={icon.id}
                        icon={icon}
                        isActive={activeFilters.includes(icon.label)}
                        onToggle={onToggle}
                    />
                ))}
            </ul>
        </li>
    )
}

export default FilterGroup;