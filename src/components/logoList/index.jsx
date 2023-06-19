import PropTypes from "prop-types";
function LogoList({ logoTable }) {
  return (
    <ul className="logo-list">
      {logoTable.map((logo, index) => (
        <li key={index}>
          <div>
            <img src={logo.src} alt={logo.name} title={logo.name}></img>
          </div>
        </li>
      ))}
    </ul>
  );
}

LogoList.propTypes = {
  logoTable: PropTypes.array.isRequired,
};

export default LogoList;
