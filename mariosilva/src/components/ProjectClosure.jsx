import React from "react";

import IconGroup from "./IconGroup";
import ProjectNavButton from "./ProjectNavButton";

const ProjectClosure = ({
  toolsIcons,
  filterIcons,
  pDuration,
  prevSlug,
  nextSlug,
}) => {
  return (    
    <section className="pClosure">
      
      <article className="pIconsContainer">
        <p>Tools Used:</p>
        <figure className="pIcons">
          <IconGroup iconStyle="pTools" icons={toolsIcons} />
          {/*}
          <IconGroup iconStyle="pFilters" icons={filterIcons} />
          {*/}
        </figure>
      </article>
      

      <aside className="pYear">{pDuration}</aside>

      <nav className="currentPath">
        {prevSlug && (
          <ProjectNavButton
            href={`/projects/${prevSlug}`}
            direction="prev"
            icon={{
              type: "fonts-google",
              value: "west",
            }}
            label="Previous Project"
          />
        )}

        {nextSlug && (
          <ProjectNavButton
            href={`/projects/${nextSlug}`}
            direction="next"
            icon={{
              type: "fonts-google",
              value: "east",
            }}
            label="Next Project"
          />
        )}
      </nav>
    </section>
  );
};

export default ProjectClosure;
