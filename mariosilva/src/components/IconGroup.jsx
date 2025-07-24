import React from "react";

const IconGroup = ({ iconStyle, icons}) => {
    return (
        <div className={iconStyle}>
            {icons.map(({ id, value, label, type }) =>
              type === "fonts-google" ? (
                <span key={id} className="material-symbols-outlined">
                  {value}
                </span>
              ) : (
                <img key={id} src={value} alt={label} className="icon" />
              )
            )}
          </div>
    );
};

export default IconGroup;