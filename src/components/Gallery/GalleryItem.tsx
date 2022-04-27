import React from "react";
import { GalleryItemModel } from "../../utils/models/GalleryItemModel";
import { Link } from "react-router-dom";

const GalleryItem = (props: GalleryItemModel) => {
  return (
    <Link to={`/projects/${props.shortTitle}`} className="project">
      <img
        className="project__cover"
        src={props.cover}
        alt={`${props.title} cover`}
      />
      <div className="project__overlay">
        <span className="project_name overlay_name color-default">
          {props.title}
        </span>
      </div>
    </Link>
  );
};

export default GalleryItem;
