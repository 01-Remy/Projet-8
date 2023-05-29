import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ content, link, classname, isNav }) {
  const button = <button className={classname}>{content}</button>;
  const elem = isNav ? <Link to={link}>{button}</Link> : link ? <a href={link}>{button}</a> : button;

  return elem;
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
  classname: PropTypes.string,
  isNav: PropTypes.bool.isRequired,
};

export default Button;
