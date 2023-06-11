import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Socials() {
  return (
    <ul className="social-icons">
      <li>
        <a href="https://github.com/01-Remy" target="_blank" rel="noreferrer" title="GitHub">
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/r%C3%A9my-balland-569a131b0/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
      </li>
    </ul>
  );
}

export default Socials;
