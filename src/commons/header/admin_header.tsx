import React from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiLogout } from "@mdi/js";

import HamburgerMenu from "./hamburger_menu";

import './styles.scss';

export default () => {
  return (
    <div className="header_container">
      <img src="/assets/images/logo.png" alt="logo" />
      <ul className="web_nav">
        <li>
          <Link to="/admin">Home</Link>
        </li>
        <li>
            <Link to="/keywords">Keywords</Link>
          </li>
      </ul>
      <Link to="/login">
          <Icon
            path={mdiLogout}
            size={0.8}
            color=" #234DDD"
            className="web_nav"
          />
        </Link>
      <HamburgerMenu
        burger_class="burger_class"
        keywordLink="/keywords"
        keywords="Keywords"
        home="Home"
        homeLink="/admin"
      />
    </div>
  );
};
