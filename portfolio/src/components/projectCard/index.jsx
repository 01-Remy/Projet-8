import Tags from "../projectCard/tags";
import Button from "../button";
const tags = ["tech1", "tech2", "tech3"];

function ProjectCard() {
  return (
    <div className="project-card">
      <div className="card-title">
        <Tags names={tags} />
        <h2>Projet</h2>
      </div>
      <Button content={"Voir plus"} isNav={false} classname={"btn btn-card"} />
    </div>
  );
}

export default ProjectCard;
