import ProjectCard from "../../components/projectCard";

function Portfolio() {
  return (
    <main className="remy-portfolio">
      <h1 className="page-title">Portfolio</h1>
      <section className="project-grid">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </main>
  );
}

export default Portfolio;
