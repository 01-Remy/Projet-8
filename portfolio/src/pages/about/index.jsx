import ProfilePicture from "../../components/profilePicture";
import Button from "../../components/button";
import LogoList from "../../components/logoList";
import personalInfo from "../../data/personal-info.json";
import * as logos from "../../assets/logos";

const skills = [
  {
    name: "HTML5",
    src: logos.html,
  },
  {
    name: "CSS3",
    src: logos.css,
  },
  {
    name: "Bootstrap",
    src: logos.bs,
  },
  {
    name: "Tailwindcss",
    src: logos.tailwind,
  },
  {
    name: "Javascript",
    src: logos.js,
  },
  {
    name: "React",
    src: logos.react,
  },
  {
    name: "NodeJs",
    src: logos.node,
  },
  {
    name: "Figma",
    src: logos.figma,
  },
  {
    name: "Git",
    src: logos.git,
  },
];

function About() {
  return (
    <main className="remy-about">
      <h1 className="page-title">À propos</h1>
      <section>
        <ProfilePicture />
        <div className="description">
          <h2>{personalInfo["main-job"]}</h2>
          <p>{personalInfo.description}</p>
          <ul className="info-list">
            <li>
              Nom: <span>{personalInfo["full-name"]}</span>
            </li>
            <li>
              <adress>
                Email:{" "}
                <a href={"mailto:" + personalInfo.email} title="Écrivez moi !">
                  {personalInfo.email}
                </a>
              </adress>
            </li>
          </ul>
          <div className="btn-box">
            <Button content={"Télécharger mon CV"} link={"#"} isNav={false} classname={"btn btn-empty"} />
            <Button content={"Me contacter"} link={"/contact"} isNav={true} classname={"btn btn-full"} />
          </div>
        </div>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <LogoList logoTable={skills} />
      </section>
    </main>
  );
}

export default About;
