import PropTypes from "prop-types";

function Tags({ names }) {
  return (
    <ul className="tag-list">
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

Tags.propTypes = {
  names: PropTypes.array.isRequired,
};

export default Tags;
