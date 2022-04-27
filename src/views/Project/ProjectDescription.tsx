import React from "react";
import Share from "../../components/Share/Share";

const ProjectDescription = ({ description }: { description: string }) => {
  return (
    <div className="project__description pagewidth_max">
      <div className="content-row content-row_center project-m-b">
        <h3 className="description__header m-b-2">О проекте</h3>
        <Share />
      </div>
      <p className="description__text">{description}</p>
    </div>
  );
};

export default ProjectDescription;
