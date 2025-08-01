import React from "react";
import Icon from './Icon';


const FilterButton = ({icon, isActive, onToggle }) => {
    const {id, label, value, type} = icon;
    return (
        <li key={id}>
            <button
                className={`iconTextBtn ${isActive ? "active" : ""}`}
                onClick={() => onToggle(label)}
                aria-label={`click to add ${label} to the filtering selection`}
            >
                <Icon
                    type={type}
                    value={value}
                    label={label}                    
                />
                {label}
            </button>
        </li>
    )
}

export default FilterButton;