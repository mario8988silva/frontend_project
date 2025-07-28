import React from "react";
import Icon from "./Icon";

const IconGroup = ({ iconStyle, icons }) => {
  return (
    <div className={iconStyle}>
      {icons.map((iconProps) => (
        <Icon key={iconProps.id} {...iconProps} />
      ))}
    </div>
  );
};

export default IconGroup;
