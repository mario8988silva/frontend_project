import React from "react";

const ProjectNavButton = ({href, direction, icon, label}) => {
  return (
    <a href={href} className="iconTextBtn">
      {direction === "prev" && (
        <span className="icon material-symbols-outlined">{icon}</span>
      )}
      {label}
      {direction === "next" && (
        <span className="icon material-symbols-outlined">{icon}</span>
      )}
    </a>
  );
};

export default ProjectNavButton;
