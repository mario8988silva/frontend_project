import React from "react";
import Icon from './Icon';


const FilterButton = ({icon, isActive, onToggle }) => {
    const {id, label, value, type} = icon;
    return (
        <li key={id}>
            <button
                className={`iconTextBtn ${isActive ? "active" : ""}`}
                onClick={() => onToggle(label)}
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