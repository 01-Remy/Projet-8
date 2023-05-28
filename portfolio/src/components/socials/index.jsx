import svgPath from "../../data/icon-path.json";

function Socials() {
  return (
    <ul className="social-icons">
      <li>
        <a href="https://github.com/01-Remy" target="_blank" rel="noreferrer" title="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
            <path d={svgPath.github} />
          </svg>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/r%C3%A9my-balland-569a131b0/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d={svgPath.linkedIn} />
          </svg>
        </a>
      </li>
    </ul>
  );
}

export default Socials;
