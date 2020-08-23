import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "@mdi/react";
import {
  mdiLogout,
  mdiGauge,
  mdiClipboardCheckOutline,
  mdiToolboxOutline,
} from "@mdi/js";
import Styled from "styled-components";

import HamburgerMenu from "./admin-hamburger";

export default function AdminLayout(props: React.PropsWithChildren<unknown>) {
  const { children } = props;
  return (
    <>
      <AdminHeader>
        <img src="/assets/images/logo.png" alt="SQC" />
        <HamburgerMenu />
      </AdminHeader>
      <AdminMain>
        <AdminNav>
          <div className="nav-logo">
            <img src="/assets/images/logo.png" alt="SQC" />
          </div>
          <nav>
            <NavLink
              to="/app"
              activeClassName="active"
              isActive={(match) => {
                if (!match) {
                  return false;
                }
                return true;
              }}
              exact
            >
              <div>
                <Icon path={mdiGauge} size={0.8} />
                Dashboard
              </div>
            </NavLink>
            <NavLink
              to="/app/all-users"
              activeClassName="active"
              isActive={(match) => {
                if (!match) {
                  return false;
                }
                return true;
              }}
            >
              <div>
                <Icon path={mdiToolboxOutline} size={0.8} />
                Users
              </div>
            </NavLink>
            <NavLink
              to="/app/all-keywords"
              activeClassName="active"
              isActive={(match) => {
                if (!match) {
                  return false;
                }
                return true;
              }}
            >
              <div>
                <Icon path={mdiClipboardCheckOutline} size={0.8} />
                Keywords
              </div>
            </NavLink>
            <NavLink to="/">
              <div>
                <Icon path={mdiLogout} size={0.8} />
                Log Out
              </div>
            </NavLink>
          </nav>
        </AdminNav>
        <AdminConatiner>{children}</AdminConatiner>
      </AdminMain>
    </>
  );
}

const AdminHeader = Styled.div`
border: 2px;
height: 70px
  display: flex;
  align-items: center;
  z-index: 999;
  position: relative;
  -webkit-box-shadow: 0px 4px 28px 0px rgba(241, 239, 239, 1);
  -moz-box-shadow: 0px 4px 28px 0px rgba(241, 239, 239, 1);
  box-shadow: 0px 4px 28px 0px rgba(241, 239, 239, 1);
  background-color: #ffffff;
  padding: 0 1rem;

  img {
    width: 9rem;
    padding: 0.8rem 0;
  }
  @media (min-width: 1024px){
    display: none;
  }
`;

const AdminMain = Styled.div`
background: rgba(251, 255, 237, 0.7);
  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    position: relative;
  }
`;

const AdminNav = Styled.div`
background-color :#fff;
  
  @media (min-width: 1024px){
      display: flex;
      flex-direction: column;
      position: fixed;
      flex: 0 0 20%;
      background-color: #fff;
      height: 100vh;
      width: 13%;
      .nav-logo {
        margin: 10px auto;
        padding: 1rem 1rem 0 1rem;
        img {
          width: 100%;
        }
      }

      nav {
        text-decoration: none;
        padding: 0;
        display: flex;
        flex-direction: column;
          a {
            text-decoration: none;
            color: #8181A5;
            display: flex;
            align-items: center;
            font-size: 16px;
            padding: 0 1rem;
            font-weight: 600;
            margin-bottom: 10px;
            div {
              display: flex;
              padding: 1rem;
            }
            svg {
              padding-right: 1rem;
              color: #8181A5;
            }
            &:hover,
            &:focus {
              border-right: 2px solid #5e80f4;
              div{
                width: 100%;
                color: #1C1D21;
                background-color: #5E81F419;
                border-radius: 4px;
                svg{
                  color: #5E81F4;
                }
              }
            }
             .active {
              border-right: 3px solid #5e80f4;
              div{
                width: 100%;
                color: #1C1D21;
                background-color: #5E81F419;
                border-radius: 4px;
                svg{
                  color: #5E81F4;
                }
              }
            }
          }
        }
  }
`;

const AdminConatiner = Styled.div`
  background-color: rgba(251, 255, 237, 0.7);
  padding: 0;
  @media (min-width: 1024px){
    width: 80%;
    flex: 0 0 83%;
    position: relative;
    left: 15.5%;
  }
`;
