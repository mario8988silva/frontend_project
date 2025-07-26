import React from "react";
import Icon from "./Icon";

const DownloadButton = ({href, icon, label}) => {
  return (
    <a
    href={href}
    download 
    className="iconTextBtn"
    >
        {icon && <Icon {...icon} />}
        {label}
    </a>
  );
};

export default DownloadButton;
