import ProfilePicture from "../../components/profilePicture";
import Button from "../../components/button";
import LogoList from "../../components/logoList";
import personalInfo from "../../data/personal-info.json";
import CV from "../../assets/CV-RémyBalland_2023.pdf";
import * as logos from "../../assets/logos";
import { MdDownload, MdMail } from "react-icons/md";

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
              <address>
                Email:
                <a href={"mailto:" + personalInfo.email} title="Écrivez moi !">
                  {personalInfo.email}
                </a>
              </address>
            </li>
          </ul>
          <div className="btn-box">
            <Button
              content="Télécharger mon CV"
              icon={<MdDownload />}
              link={CV}
              classname={"btn btn-empty"}
              download={"CV-RémyBalland"}
            />
            <Button
              content={"Me contacter"}
              icon={<MdMail />}
              link={"/contact"}
              classname={"btn btn-full"}
              isNav={true}
            />
          </div>
        </div>
      </section>
      <section className="skills">
        <h2>Compétences</h2>
        <LogoList logoTable={skills} />
      </section>
    </main>
  );
}

export default About;
