import { NavLink } from "react-router-dom";

function NavMenuLinks({ dataLinks }) {
  return (
    <ul>
      {dataLinks.map((link, index) => (
        <li key={index}>
          <NavLink to={link.linkPath} className={(navData) => (navData.isActive ? "nav-link active" : "nav-link")}>
            <span className="link-icon">{link.icon}</span>
            {link.linkTitle}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavMenuLinks;
