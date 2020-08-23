import React from "react";
import { NavLink,  Redirect, withRouter } from "react-router-dom";
import Icon from "@mdi/react";
import NavMenu from "./data";
import { mdiLogout } from "@mdi/js";
import "./style.scss";

export default withRouter(function Dashboard(props) {
  const menuNav = NavMenu.map((item, index) => (
    <NavLink to={item.path} activeClassName="active" className="nav">
      <Icon path={item.iconName} size={0.8} className="icon" />
      {item.name}
    </NavLink>
  ));

  const logout = () => {
    window.localStorage.removeItem("token");
    props.history.push("/");
  };

  const token = localStorage.getItem("token");
  return (
    <>
      {!token ? (
        <Redirect to="/" />
      ) : (
        <div className="dashboard">
          <div className="sidebar">
            <div className="logo">
              <img src="/assets/images/logo.png" alt="tech job logo" />
            </div>
            <div>
              <div className="menu">{menuNav}</div>
            </div>
          </div>
          <div className="main">
            <div className="header">
              <div className="header-left">Welcome HR</div>
              <div className="header-right" onClick={logout}>
                <Icon path={mdiLogout} size={1} className="icon" />
                Log out
              </div>
            </div>
            <div className="main_body">{props.children}</div>
          </div>
        </div>
      )}
    </>
  );
});
