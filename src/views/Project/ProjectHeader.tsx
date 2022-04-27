import React from "react";

const ProjectHeader = ({
  cover,
  title,
  category,
}: {
  cover: string;
  title: string;
  category: string;
}) => {
  return (
    <div className="project__header pagewidth_max">
      <img className="project__cover w-47" src={cover} alt="Project Cover" />
      <div className="content-column content-column_center w-47">
        <h1 className="project__name">{title}</h1>
        <h3 className="project__category category_indent">{category}</h3>
      </div>
    </div>
  );
};

export default ProjectHeader;
