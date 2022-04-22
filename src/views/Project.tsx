import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import ProjectsService from "../services/projects.service";
import { ProjectModel } from "../models/ProjectModel";
import "./Project.scss";
import Share from "../components/UI/Share/Share";
import ProjectNavigation from "../components/ProjectNavigation";
import Gallery from "../components/Gallery";
import GalleryLightbox from "../components/GalleryLightbox/GalleryLightbox";
import { GalleryImage } from "../models/GalleryImage";

const Project = () => {
  const { projectname } = useParams();
  //TODO: REDO STATE INIT
  const [project, setProject] = useState<ProjectModel>(
    new ProjectModel("", "", "", "", "", [])
  );
  const [projectImages, setProjectImages] = useState<Required<GalleryImage>[]>(
    []
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [fetchProject, isProjectLoading, projectError] = useFetching(
    async (shortName: string) => {
      const res = await ProjectsService.getProjectByName(shortName);
      setProjectImages(
        res.files.map(
          (value, index) => new GalleryImage(value.image, value.cover, index)
        ) as Required<GalleryImage>[]
      );
      setProject(res as Required<ProjectModel>);
    }
  );

  function openLightbox(imageIndex: number) {
    setSelectedImageIndex(imageIndex);
    setLightboxOpen(true);
  }

  useEffect(() => {
    fetchProject(projectname);
  }, []);

  //TODO: REFACTOR COMPONENT
  return (
    <React.Fragment>
      <div className="project container">
        <div className="project__header pagewidth_max">
          <img
            className="project__cover w-47"
            src={project?.cover}
            alt="Project Cover"
          />
          <div className="content-column content-column_center w-47">
            <h1 className="project__name">{project?.title}</h1>
            <h3 className="project__category category_indent">
              {project?.category}
            </h3>
          </div>
        </div>
        <div className="project__description pagewidth_max">
          <div className="content-row content-row_center project-m-b">
            <h3 className="description__header m-b-2">О проекте</h3>
            <Share />
          </div>
          <p className="description__text">{project?.description}</p>
        </div>
        <div className="project__items">
          {projectImages.map((files) => (
            <img
              className="project-item"
              src={files.cover}
              onClick={() => openLightbox(files.id)}
              key={files.id}
            />
          ))}
        </div>
        <ProjectNavigation></ProjectNavigation>
        <h3 className="description__header project-m-b">Другие проекты</h3>

        <Gallery showAllGalleryItems={false} />
      </div>
      {lightboxOpen && (
        <GalleryLightbox
          images={projectImages}
          initialImageIndex={selectedImageIndex}
          visible={lightboxOpen}
          setVisible={setLightboxOpen}
        />
      )}
    </React.Fragment>
  );
};

export default Project;
