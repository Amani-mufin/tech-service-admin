import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

interface HamburgerProps {
  burger_class?: string;
  keywords?: string;
  keywordLink: string;
  home: string;
  homeLink: string;
}

export default function Hamburger(props: HamburgerProps) {
  const { burger_class, keywords, keywordLink, home, homeLink } = props;

  function onLogout(e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
    e.preventDefault();
    localStorage.removeItem('user-token');
    window.location.href = '/login';
  }
  return (
    <div id="menuToggle" className={burger_class}>
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <div id="menu">
        <h4>Menu</h4>
        <div className="hamburger_menu">
          <div>
            <ul>
              <li>
                <Link to={homeLink}>{home}</Link>
              </li>
              <li>
                <Link to={keywordLink}>{keywords}</Link>
              </li>
              <li>
                <Link to="/login" onClick={onLogout}>
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
