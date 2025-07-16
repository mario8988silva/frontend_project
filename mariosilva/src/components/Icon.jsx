import React from "react";

const Icon = ({type, value, label}) => {
    return type === "fonts-google" ? (
            <span className="icon  material-symbols-outlined ">{value}</span>
        ) : (
        <img src={value} alt={label} className="icon" />
    );
};

export default Icon;