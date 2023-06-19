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
    if (!isCardClicked) {
      modal.showModal();
    } else {
      modal.close();
    }
    document.getElementById("root").classList.toggle("block-scroll");
    document.body.classList.toggle("block-scroll");
    setIsCardClicked(!isCardClicked);
  };

  const clickOutside = (event) => {
    const modal = document.getElementById(modalId);
    const modalDimensions = modal.getBoundingClientRect();
    console.log(event.target);
    if (
      event.clientX < modalDimensions.left ||
      event.clientX > modalDimensions.right ||
      event.clientY < modalDimensions.top ||
      event.clientY > modalDimensions.bottom
    ) {
      modal.close();
      setIsCardClicked(false);
      document.getElementById("root").classList.remove("block-scroll");
      document.body.classList.remove("block-scroll");
    }
  };

  return (
    <>
      <div className="project-card" style={backgroundImage}>
        <div className="card-title">
          <Tags names={projectData.tags} />
          <h2>{projectData.name}</h2>
        </div>
        <div className={"btn btn-card"} onClick={updateModal}>
          Voir plus <MdArrowForward />
        </div>
        <div className="darken-background"></div>
      </div>
      <dialog className="project-modal" id={modalId} onClick={clickOutside}>
        <button className="close-modal" onClick={updateModal}>
          <MdClose />
        </button>
        <div className="modal-content">
          <div className="description">
            <h2>{projectData.name}</h2>
            <p>{projectData.description}</p>
            <Tags names={projectData.tags} />
            <div className="modal-btn">
              {projectData.github ? (
                <Button
                  link={projectData.github}
                  content="GitHub"
                  classname={"btn btn-full"}
                  target={"_blank"}
                  icon={<FaGithub />}
                />
              ) : null}
              {projectData.demo ? (
                <Button
                  link={projectData.demo}
                  content="Démo"
                  classname={"btn btn-empty"}
                  target={"_blank"}
                  icon={<MdMonitor />}
                />
              ) : null}
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
