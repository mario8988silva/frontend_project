import React from "react";

const ProjectOverview = ({
  id,
  pName,
  pSlug,

  pDescription,
  pBriefingProblem,
  pBriefingSolution,
  pRole,
  pProcess,
  pAnalysisAndNotes,
  pInnerLink,
  pOutLink,

  pClientName,
  pClientLink,
  pClientDescription,

  pCourse,
  pTools,
  pFilters,
  pDuration,
  pYear,

  pImages,
}) => {
  return (
    <section className="pOverviewContainer">
          <article className="pOverview">
            <p className="pBriefingProblem">{pBriefingProblem}</p>
            <p className="pBriefingSolution">{pBriefingSolution}</p>
            <p className="pRole">{pRole}</p>
            <p className="pProcess">{pProcess}</p>
            <p className="pClienpAnalysisAndNotestName">{pAnalysisAndNotes}</p>
            <a href={pInnerLink} target="_blank" className="pInnerLink">
              {pInnerLink}
            </a>
            <a href={pOutLink} target="_blank" className="pOutLink">
              {pOutLink}
            </a>
          </article>
        </section>
  );
};

export default ProjectOverview;
