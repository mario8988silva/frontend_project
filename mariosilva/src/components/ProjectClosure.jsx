import React from "react";

import IconGroup from "./IconGroup";
import ProjectNavButton from "./ProjectNavButton";

const ProjectClosure = ({ toolsIcons, filterIcons, pDuration }) => {
  return (
    <section className="pClosure">
      <article className="pIconsContainer">
        <p>Tools Used:</p>
        <figure className="pIcons">
          <IconGroup iconStyle="pTools" icons={toolsIcons}/>
          <IconGroup iconStyle="pFilters" icons={filterIcons}/>
        </figure>
      </article>

      <aside className="pYear">{pDuration}</aside>

      <nav className="currentPath">
        <ProjectNavButton
          href=""
          direction="prev"
          icon="west"
          label="Previous Project"
        />

        <ProjectNavButton
          href=""
          direction="next"
          icon="east"
          label="Next Project"
        />
      </nav>
    </section>
  );
};

export default ProjectClosure;
