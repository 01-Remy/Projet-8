function LogoList({ logoTable }) {
  return (
    <ul className="logo-list">
      {logoTable.map((logo, index) => (
        <li key={index}>
          <a href={logo.link}>
            <img src={logo.icon} alt={logo.alt}></img>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default LogoList;
