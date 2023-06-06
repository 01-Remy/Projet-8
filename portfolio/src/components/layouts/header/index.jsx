import NavMenuLinks from "./navMenuLinks";
import { useState } from "react";
import { MdClose, MdMenuOpen, MdHome, MdMail, MdPerson, MdWork } from "react-icons/md";

function Header() {
  const [menu_class, setMenuClass] = useState("side-menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const dataLinks = [
    {
      linkTitle: "Accueil",
      linkPath: "/",
      icon: <MdHome />,
    },
    {
      linkTitle: "À propos",
      linkPath: "/à-propos",
      icon: <MdPerson />,
    },
    {
      linkTitle: "Portfolio",
      linkPath: "/portfolio",
      icon: <MdWork />,
    },
    {
      linkTitle: "Contact",
      linkPath: "/contact",
      icon: <MdMail />,
    },
  ];

  const updateMenu = () => {
    if (!isMenuClicked) {
      setMenuClass("side-menu open");
    } else {
      setMenuClass("side-menu");
    }
    document.body.classList.toggle("block-scroll");
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <header className="remy-header">
      <nav>
        <NavMenuLinks dataLinks={dataLinks} />
        {!isMenuClicked ? (
          <MdMenuOpen className="burger-menu" onClick={updateMenu} />
        ) : (
          <MdClose className="burger-menu" onClick={updateMenu} />
        )}
      </nav>
      <div className={menu_class}>
        <NavMenuLinks dataLinks={dataLinks} />
      </div>
    </header>
  );
}

export default Header;
