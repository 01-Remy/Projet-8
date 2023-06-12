import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ content, link, classname, icon, target, download, isNav }) {
  const button = (
    <button className={classname}>
      {icon ? <span className="btn-icon">{icon}</span> : null}
      <span className="btn-content">{content}</span>
    </button>
  );

  let elem;
  if (isNav) {
    elem = (
      <Link to={link} target={target ? target : null}>
        {button}
      </Link>
    );
  } else if (link) {
    elem = (
      <a href={link} target={target ? target : null} download={download ? download : null}>
        {button}
      </a>
    );
  } else {
    elem = button;
  }

  return elem;
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
  classname: PropTypes.string,
};

export default Button;
