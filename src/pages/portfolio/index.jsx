import ProjectCard from "../../components/projectCard";
import * as projectImages from "../../assets/images/projects";

const projects = [
  {
    name: "Booki",
    tags: ["HTML", "CSS"],
    images: [
      { name: "image 1", url: projectImages.booki },
      { name: "image 2", url: projectImages.bookiMobile },
    ],
    description: "Intégration responsive du front-end d'un site de réservation d'hotels.",
    github: "https://github.com/01-Remy/Projet2",
    demo: "https://01-remy.github.io/Projet2/",
  },
  {
    name: "Projet 2",
    tags: ["tech1", "tech2", "tech3"],
    images: [
      { name: "image 1", url: "#" },
      { name: "image 2", url: "#" },
      { name: "image 3", url: "#" },
    ],
    description: "Description ni trop longue ni trop courte, expliquant le projet.",
  },
  {
    name: "Projet 3",
    tags: ["tech1", "tech2", "tech3"],
    images: [
      { name: "image 1", url: "#" },
      { name: "image 2", url: "#" },
      { name: "image 3", url: "#" },
    ],
    description: "Description ni trop longue ni trop courte, expliquant le projet.",
  },
  {
    name: "Projet 4",
    tags: ["tech1", "tech2", "tech3"],
    images: [
      { name: "image 1", url: "#" },
      { name: "image 2", url: "#" },
      { name: "image 3", url: "#" },
    ],
    description: "Description ni trop longue ni trop courte, expliquant le projet.",
  },
];

function Portfolio() {
  return (
    <main className="remy-portfolio">
      <h1 className="page-title">Portfolio</h1>
      <section className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard projectData={project} key={index} />
        ))}
      </section>
    </main>
  );
}

export default Portfolio;
