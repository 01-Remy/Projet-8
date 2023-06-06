import Tags from "../projectCard/tags";
import Button from "../button";
import { useState } from "react";
import { MdClose, MdArrowForward, MdMonitor } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ projectData }) {
  const backgroundImage = {
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${projectData.images[0].url})`,
  };
  const modalId = projectData.name + "-modal";

  const [isCardClicked, setIsCardClicked] = useState(false);

  const updateModal = () => {
    const modal = document.getElementById(modalId);
    modal.addEventListener("click", (e) => {
      const modalDimensions = modal.getBoundingClientRect();
      if (
        e.clientX < modalDimensions.left ||
        e.clientX > modalDimensions.right ||
        e.clientY < modalDimensions.top ||
        e.clientY > modalDimensions.bottom
      ) {
        modal.close();
        setIsCardClicked(false);
      }
    });
    if (!isCardClicked) {
      modal.showModal();
    } else {
      modal.close();
    }
    setIsCardClicked(!isCardClicked);
  };

  return (
    <>
      <div className="project-card" style={backgroundImage} onClick={updateModal}>
        <div className="card-title">
          <Tags names={projectData.tags} />
          <h2>{projectData.name}</h2>
        </div>
        <div className={"btn btn-card"}>
          Voir plus <MdArrowForward />
        </div>
        <div className="darken-background"></div>
      </div>
      <dialog className="project-modal" id={modalId}>
        <button className="close-modal" onClick={updateModal}>
          <MdClose />
        </button>
        <div className="modal-content">
          <div className="description">
            <h2>{projectData.name}</h2>
            <p>{projectData.description}</p>
            <Tags names={projectData.tags} />
            <div className="modal-btn">
              <Button
                link={projectData.github}
                content="GitHub"
                classname={"btn btn-full"}
                target={"_blank"}
                icon={<FaGithub />}
              />
              <Button
                link={projectData.demo}
                content="Démo"
                classname={"btn btn-empty"}
                target={"_blank"}
                icon={<MdMonitor />}
              />
            </div>
          </div>
          {projectData.images.map((image, index) => (
            <img key={index} src={image.url} alt={image.name}></img>
          ))}
        </div>
      </dialog>
    </>
  );
}

export default ProjectCard;
