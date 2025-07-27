import React from "react";

const Icon = ({type, value, label, viewBox, path}) => {
    if (type === "fonts-google") {
        return (
            <span className="icon material-symbols-outlined">{value}</span>
        );
    } else if (type === "inline-svg") {
        return (
            <svg viewBox={viewBox} className="icon" fill="currentColor">
                <path d={path} />
            </svg>
        );
    } else {
        return <img src={value} alt={label} className="icon" />;
    }
};

export default Icon;