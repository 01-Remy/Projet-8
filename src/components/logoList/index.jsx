import PropTypes from "prop-types";
function LogoList({ logoTable }) {
  return (
    <ul className="logo-list">
      {logoTable.map((logo, index) => (
        <li key={index}>
          <div>
            <a href={logo.link} title={logo.name}>
              <img src={logo.src} alt={logo.name}></img>
            </a>
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
