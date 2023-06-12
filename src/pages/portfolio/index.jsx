import ProjectCard from "../../components/projectCard";
import * as projectsImages from "../../assets/images/projects";

const projects = [
  {
    name: "Booki",
    tags: ["HTML", "CSS"],
    images: [
      { name: "Page d'accueil du site Booki", url: projectsImages.bookiImages.bookiMain },
      { name: "Version mobile du site Booki", url: projectsImages.bookiImages.bookiMobile },
      { name: "Pied de page du site Booki", url: projectsImages.bookiImages.bookiFooter },
    ],
    description: "Projet d'études | Intégration responsive du front-end d'un site de réservation d'hotels.",
    github: "https://github.com/01-Remy/Projet2",
    demo: "https://01-remy.github.io/Projet2/",
  },
  {
    name: "Sophie Buel",
    tags: ["HTML", "CSS", "JS"],
    images: [
      { name: "Page d'accueil du site Sophie Buel", url: projectsImages.sophieImages.sophieMain },
      { name: "Fomulaire de login du site Sophie Buel", url: projectsImages.sophieImages.sophieContact },
      {
        name: "Version mobile de la page d'accueil du site Sophie Buel",
        url: projectsImages.sophieImages.sophieMobile,
      },
    ],
    description:
      "Projet d'études | Modification dynamique du site avec JS. Récupération des travaux depuis l'API, ajout d'un filtre sur la gallerie, d'une page de connexion et d'une modale d'administration",
    github: "https://github.com/01-Remy/Projet-3",
  },
  {
    name: "Nina Carducci",
    tags: ["SEO", "JS", "Jquery"],
    images: [
      { name: "Gallerie du site Nina Carducci", url: projectsImages.ninaImages.ninaMain },
      { name: "Page d'accueil mobile du site Nina Carducci", url: projectsImages.ninaImages.ninaMobile },
      { name: "Gallerie du site Nina Carducci avec la modale ouverte", url: projectsImages.ninaImages.ninaModale },
    ],
    description:
      "Projet d'études | Debug Javascript et optimisation SEO du site (lighthouse, WAVE, Rich Snippet et Schema.org).",
    github: "https://github.com/01-Remy/Projet-5",
    demo: "https://01-remy.github.io/Projet-5/",
  },
  {
    name: "Kasa",
    tags: ["SASS", "React", "tech3"],
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
