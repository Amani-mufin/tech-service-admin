import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiLogout, mdiGauge, mdiToolboxOutline, mdiClipboardCheckOutline  } from '@mdi/js';

import './styles.scss';

export default function Hamburger() {

  function onLogout(e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
    e.preventDefault();
    localStorage.removeItem('user-token');
    window.location.href = '/login';
  }
  return (
    <div id="menuToggle">
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
                <Link to="/">
                  <Icon path={mdiGauge} size={0.8} color=" #ffffff" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/all-users">
                <Icon path={mdiToolboxOutline} size={0.8} color=" #ffffff" />
                Users
                </Link>
              </li>
              <li>
                <Link to="/all-keywords">
                <Icon path={mdiClipboardCheckOutline} size={0.8} color=" #ffffff" />
                Keywords
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={onLogout}>
                  <Icon
                    path={mdiLogout}
                    size={0.8}
                    color=" #ffffff"
                  />
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
