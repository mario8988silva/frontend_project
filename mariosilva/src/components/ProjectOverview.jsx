import React from "react";
import DownloadButton from "./DownloadButton";

const ProjectOverview = ({
  pBriefingProblem,
  pBriefingSolution,
  pRole,
  pProcess,
  pAnalysisAndNotes,
  pInnerLink = [],
  pOutLink = [],
}) => {
  return (
    <section className="pOverviewContainer">
      <article className="pOverview">
        <p className="pBriefingProblem">{pBriefingProblem}</p>
        <p className="pBriefingSolution">{pBriefingSolution}</p>
        <p className="pRole">{pRole}</p>
        <p className="pProcess">{pProcess}</p>
        <p className="pClienpAnalysisAndNotestName">{pAnalysisAndNotes}</p>

        <div className="pInnerLinkContainer">
          {pInnerLink.length > 0 &&
            pInnerLink.map((link, index) => {
              const fileName = link.split("/").pop();
              return (
                <DownloadButton
                  key={`inner-${index}`}
                  href={link}
                  label={`Download ${fileName}`}
                  icon={{
                    type: "fonts-google",
                    value: "download",
                    label: "download icon",
                  }}
                />
              );
            })}
        </div>

        <div className="pOutLinkContainer">
          {Array.isArray(pOutLink) &&
            pOutLink.map((link, index) => (
              <DownloadButton
                  key={`inner-${index}`}
                  href={link}
                  label={`Visit: ${link}`}
                  icon={{
                    type: "fonts-google",
                    value: "new_window",
                    label: "new_window icon",
                  }}
                />
            ))}
        </div>
      </article>
    </section>
  );
};

export default ProjectOverview;
