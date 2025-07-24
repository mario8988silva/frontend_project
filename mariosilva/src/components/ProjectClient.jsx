import React from "react";

const ProjectClient = ({pClientName, pClientLink, pClientDescription, pCourse}) => {
  return (
    <section className="pClient">
      <article>
        <h2 className="pClientName">{pClientName}</h2>
        <a href={pClientLink} className="pClientLink">
          {pClientLink}
        </a>
        <p className="pClientDescription">{pClientDescription}</p>
        <p className="pCourse">Course: {pCourse}</p>
      </article>
    </section>
  );
};

export default ProjectClient;
