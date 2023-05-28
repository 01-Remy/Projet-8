import { Link } from "react-router-dom";

function Button({ content, link, classname }) {
  return (
    <Link to={link}>
      <button className={classname}>{content}</button>
    </Link>
  );
}

export default Button;
