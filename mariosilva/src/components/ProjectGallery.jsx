import React from "react";

const ProjectGallery = ({pImages, setOpenImage}) => {
    return (
        <section className="pGridGalleryContainer">
          {pImages?.map((src, index) => (
            <figure
              key={index}
              className="pGalleryItem"
              onClick={() => setOpenImage(`/${src}`)}
            >
              <img src={`/${src}`} alt={`Project Image ${index + 1}`} />
            </figure>
          ))}
        </section>
    );
};

export default ProjectGallery;