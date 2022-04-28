import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../../hooks/useFetching";
import ProjectsService from "../../services/projects.service";
import { ProjectModel } from "../../utils/models/ProjectModel";
import "./Project.scss";
import ProjectNavigation from "./ProjectNavigation";
import Gallery from "../../components/Gallery/Gallery";
import ImageLightbox from "../../components/ImageLightbox/ImageLightbox";
import { GalleryImage } from "../../utils/models/GalleryImage";
import ProjectHeader from "./ProjectHeader";
import ProjectDescription from "./ProjectDescription";
import ProjectItems from "./ProjectItems";
import Loader from "../../components/UI/Loader/Loader";

const Project = () => {
  const { projectname } = useParams();
  const [project, setProject] = useState<ProjectModel>(
    new ProjectModel("", "", "", "", "", [])
  );
  const [projectImages, setProjectImages] = useState<Required<GalleryImage>[]>(
    []
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [fetchProject, projectIsLoading] = useFetching(
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
  }, [projectname]);

  if (projectIsLoading && project === undefined) {
    return <Loader />;
  }
  return (
    <React.Fragment>
      <div className="project container">
        <ProjectHeader
          cover={project?.cover}
          title={project?.title}
          category={project?.category}
        />
        <ProjectDescription description={project?.description} />
        <ProjectItems files={projectImages} openLightbox={openLightbox} />
        <ProjectNavigation
          projectShortTitle={project?.shortTitle}
        ></ProjectNavigation>
        <h3 className="description__header project-m-b">Другие проекты</h3>
        <Gallery showAllGalleryItems={false} />
      </div>
      {lightboxOpen && (
        <ImageLightbox
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
