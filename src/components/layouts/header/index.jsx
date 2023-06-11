import NavMenuLinks from "./navMenuLinks";
import { useState } from "react";
import { MdClose, MdMenuOpen, MdHome, MdMail, MdPerson, MdWork } from "react-icons/md";

function Header() {
  const [menu_class, setMenuClass] = useState("side-menu");
  const [menuBg_class, setMenuBgClass] = useState("menu-bg");
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
      setMenuBgClass("menu-bg");
      setMenuClass("side-menu open");
    } else {
      setMenuBgClass("");
      setMenuClass("side-menu");
    }
    document.getElementById("root").classList.toggle("block-scroll");
    document.body.classList.toggle("block-scroll");

    setIsMenuClicked(!isMenuClicked);
  };

  const clickOutside = (event) => {
    const menu = document.getElementById("side-menu");
    const menuDimensions = menu.getBoundingClientRect();
    console.log(event);
    if (
      event.clientX < menuDimensions.left ||
      event.clientX > menuDimensions.right ||
      event.clientY < menuDimensions.top ||
      event.clientY > menuDimensions.bottom
    ) {
      setMenuClass("side-menu");
      setMenuBgClass("");
      setIsMenuClicked(false);
      document.getElementById("root").classList.remove("block-scroll");
      document.body.classList.remove("block-scroll");
    }
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
      <div className={menuBg_class} onClick={clickOutside}>
        <div className={menu_class} id="side-menu">
          <NavMenuLinks dataLinks={dataLinks} />
        </div>
      </div>
    </header>
  );
}

export default Header;
