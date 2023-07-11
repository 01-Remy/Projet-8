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
      "Projet d'études | Modification dynamique du site avec JS. Récupération des travaux depuis l'API, ajout d'un filtre sur la galerie, d'une page de connexion et d'une modale d'administration",
    github: "https://github.com/01-Remy/Projet-3",
  },
  {
    name: "Nina Carducci",
    tags: ["SEO", "JS", "Jquery"],
    images: [
      { name: "Gallerie du site Nina Carducci", url: projectsImages.ninaImages.ninaMain },
      { name: "Page d'accueil mobile du site Nina Carducci", url: projectsImages.ninaImages.ninaMobile },
      { name: "Galerie du site Nina Carducci avec la modale ouverte", url: projectsImages.ninaImages.ninaModale },
    ],
    description:
      "Projet d'études | Debug Javascript et optimisation SEO du site (lighthouse, WAVE, Rich Snippet et Schema.org).",
    github: "https://github.com/01-Remy/Projet-5",
    demo: "https://01-remy.github.io/Projet-5/",
  },
  {
    name: "Kasa",
    tags: ["SASS", "React"],
    images: [
      { name: "Page d'accueil du site Kasa", url: projectsImages.kasaImages.kasaMain },
      { name: "Page de présentation d'une location sur le site Kasa", url: projectsImages.kasaImages.kasaAppart },
      { name: "Version mobile de la page à propos du site Kasa", url: projectsImages.kasaImages.kasaMobile },
    ],
    description: "Projet d'études | Intégration responsive front-end sous react d'un site de location immobilière.",
    github: "https://github.com/01-Remy/Projet-6",
    demo: "https://projet-6.remy-balland.fr/",
  },
  {
    name: "VM-Extends",
    tags: ["SASS", "JS", "PHP"],
    images: [
      { name: "Page d'accueil du site vm-extend", url: projectsImages.vmImages.vmMain },
      {
        name: "Formulaire de contact du site vm-extend",
        url: projectsImages.vmImages.vmContact,
      },
      { name: "Version mobile du site vm-extend", url: projectsImages.vmImages.vmMobile },
    ],
    description:
      "Intégration du site vm-extend.fr pour Via Mobilis à l'aide d'un template afin de présenter leurs services. Projet sous architecture MVC en PHP.",
    demo: "https://www.vm-extend.fr/",
  },
  {
    name: "Mon vieux Grimoire",
    tags: ["NodeJs", "Express", "MongoDB"],
    images: [
      { name: "Page d'accueil du site Mon Vieux Grimoire", url: projectsImages.mvgImages.mvgHome },
      {
        name: "Page d'information d'un livre du site Mon Vieux Grimoire",
        url: projectsImages.mvgImages.mvgInfo,
      },
      { name: "Formulaire d'ajout de livre du site Mon Vieux Grimoire", url: projectsImages.mvgImages.mvgForm },
    ],
    description:
      "Projet d'études | Développement du back-end sous NodeJs d'un site de notation de livres. Gère la connexion, l'ajout, la modification et la suppression d'un livre.",
    github: "https://github.com/01-Remy/Projet-7",
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
