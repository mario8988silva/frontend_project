import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

const ProjectNavButton = ({href, direction, icon, label}) => {
  return (
    <Link to={href} className="iconTextBtn">
      {direction === "prev" && <Icon {...icon} />}
      {label}
      {direction === "next" && <Icon {...icon} />}
    </Link>
  );
};

export default ProjectNavButton;
