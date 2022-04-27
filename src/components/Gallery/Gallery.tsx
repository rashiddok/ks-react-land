import React, { useEffect } from "react";
import "./Gallery.scss";
import GalleryItem from "./GalleryItem";
import {
  fetchProjects,
  selectProjects,
} from "../../store/slices/projectsSlice";
import { useTypedSelector } from "../../hooks/useTypedState";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";

type ComponentProps = {
  showAllGalleryItems?: boolean;
};

const Gallery = ({ showAllGalleryItems = true }: ComponentProps) => {
  const dispatch = useTypedDispatch();
  const projects = useTypedSelector(selectProjects);
  const projectStatus = useTypedSelector((state) => state.projects.status);
  const galleryClasses = ["gallery"];

  if (!showAllGalleryItems) {
    galleryClasses.push("gallery_small");
  }

  useEffect(() => {
    if (projectStatus === "idle") {
      dispatch(fetchProjects());
    }
  }, [projectStatus, dispatch]);

  return (
    <div className={galleryClasses.join(" ")}>
      {projects.map((project) => (
        <GalleryItem
          title={project.title}
          cover={project.cover}
          shortTitle={project.shortTitle}
          key={project.shortTitle}
        ></GalleryItem>
      ))}
    </div>
  );
};

export default Gallery;
