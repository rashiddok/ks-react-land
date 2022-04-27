import React from "react";
import { GalleryImage } from "../../utils/models/GalleryImage";

type ComponentProps = {
  files: Required<GalleryImage>[];
  openLightbox: (id: number) => void;
};

const ProjectItems = ({ files, openLightbox }: ComponentProps) => {
  return (
    <div className="project__items">
      {files.map((file) => (
        <img
          className="project-item"
          alt={"Project image " + file.id}
          src={file.cover}
          onClick={() => openLightbox(file.id)}
          key={file.id}
        />
      ))}
    </div>
  );
};

export default ProjectItems;
