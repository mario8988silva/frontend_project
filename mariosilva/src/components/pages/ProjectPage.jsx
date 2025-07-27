import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

import ErrorPage from "./ErrorPage";

import projects from "../../data/projects.json";
import icons from "../../data/icons.json";

import Banner from "../Banner";
import ProjectOverview from "../ProjectOverview";
import ProjectGallery from "../ProjectGallery";
import ProjectClient from "../ProjectClient";
import ProjectClosure from "../ProjectClosure";
import OpenImage from "../OpenImage";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.pSlug === slug);

if (!project) {
  return <ErrorPage />;
}

  const {
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
  } = project;

  const [openImage, setOpenImage] = useState(null);

  const toolsIcons = icons.filter((icon) =>
    pTools?.some(
      (tool) => tool.trim().toLowerCase() === icon.label.trim().toLowerCase()
    )
  );
  const filterIcons = icons.filter((icon) =>
    pFilters?.some(
      (filters) =>
        filters.trim().toLowerCase() === icon.label.trim().toLowerCase()
    )
  );

  return (
    <>
      <Banner
        title={pName}
        description={pDescription}
        bgImage={`/${pImages?.[0]}`}
        currentPath={`projects / ${pName}`}
      />

      <main>
        <ProjectOverview
          pBriefingProblem={pBriefingProblem}
          pBriefingSolution={pBriefingSolution}
          pRole={pRole}
          pProcess={pProcess}
          pAnalysisAndNotes={pAnalysisAndNotes}
          pInnerLink={pInnerLink}
          pOutLink={pOutLink}
        />

        <ProjectGallery pImages={pImages} setOpenImage={setOpenImage} />
      </main>

      <ProjectClient
        pClientName={pClientName}
        pClientLink={pClientLink}
        pClientDescription={pClientDescription}
        pCourse={pCourse}
      />

      <ProjectClosure
        toolsIcons={toolsIcons}
        filterIcons={filterIcons}
        pDuration={pDuration}
      />

      <OpenImage src={openImage} onClose={() => setOpenImage(null)} />
    </>
  );
}

export default ProjectPage;
