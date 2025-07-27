import React from "react";
import { Link } from "react-router-dom";

const ProjectNavButton = ({href, direction, icon, label}) => {
  return (
    <Link to={href} className="iconTextBtn">
      {direction === "prev" && (
        <span className="icon material-symbols-outlined">{icon}</span>
      )}
      {label}
      {direction === "next" && (
        <span className="icon material-symbols-outlined">{icon}</span>
      )}
    </Link>
  );
};

export default ProjectNavButton;
