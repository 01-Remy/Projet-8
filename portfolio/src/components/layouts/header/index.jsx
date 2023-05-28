import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="remy-header">
      <nav>
        <Link to="/" className="home-link active">
          Accueil
        </Link>
        <Link to="/à-propos" className="about-link">
          À propos
        </Link>
        <Link to="/portfolio" className="portfolio-link">
          Portfolio
        </Link>
        <Link to="/contact" className="contact-link">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
