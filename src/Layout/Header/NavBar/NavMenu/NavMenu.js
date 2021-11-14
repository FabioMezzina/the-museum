import React, { useState } from "react";
import classes from "./NavMenu.module.scss";

const NavMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenuMobile = () => {
    setMobileOpen((prev) => {
      if (!prev) {
        window.document.body.style.overflowY = 'hidden';
      } else {
        window.document.body.style.overflowY = 'auto';
      }
      return !prev;
    });
  };
  
  return (
    <React.Fragment>
      <div className={classes["btn-toggle-menu"]} onClick={toggleMenuMobile}>
        <i className="fas fa-bars"></i>
      </div>
      <ul
        className={`${!mobileOpen && classes["mobile-closed"]} ${
          classes["nav-menu"]
        }`}
      >
        <li>
          <a href="/">Visita</a>
        </li>
        <li>
          <a href="/">Cosa vedere</a>
        </li>
        <li>
          <a href="/">Chi siamo</a>
        </li>
        <li>
          <a href="/">Attività</a>
        </li>
        <li>
          <a href="/">Agenda</a>
        </li>
        <div className={classes["btn-close-menu"]} onClick={toggleMenuMobile}>
          <i className="fas fa-times"></i>
        </div>
      </ul>
    </React.Fragment>
  );
};

export default NavMenu;
