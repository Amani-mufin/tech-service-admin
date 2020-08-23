import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useHistory } from "react-router-dom";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";

import "./index.scss";
import { apiBaseUrl } from "../../config";

const Login: FC = () => {
 
  const [showPassword, setShowPassword] = useState(false);

  let history = useHistory();

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const OnSubmit = (e: any) => {
    e.preventDefault();

    const formElements = e.target.elements;
    let data: any = {};

    Array.prototype.forEach.call(formElements, (element) => {
      data[element.name] = element.value;
    });
    const payload = {
      email: data.email,
      password: data.password,
    };
    axios
      .post(`${apiBaseUrl}/auth/login`, payload)
      .then((response) => {
        if (response.data.statusCode === 400) {
          return toast(response.data.message);
        }
        if (
          response.data.statusCode === 200 &&
          response.data.payload.isAdmin === true
        ) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.payload));
          history.push("/app");
        } else {
          return toast("You're part of us but not an Admin");
        }
        toast(response.data.message);
      })
      .catch((err) => {
        return toast("Oops! something happen");
      });
  };

  const handlePassword = showPassword ? "text" : "password";
  const showPasswordImg = showPassword
    ? "./assets/images/eye-off.svg"
    : "/assets/images/eye.svg";

  return (
    <div className="admin-login">
      <div className="admin-login__left">
        <div className="admin-login__left__image">
          <img src={"/assets/images/lydia.png"} alt="" />
        </div>
      </div>
      <div className="login">
        <Link to="/">
          <img className="mb-30" src="/assets/images/logo.png" alt="Logo" />
        </Link>
        <form className="login__form py-20 " onSubmit={OnSubmit}>
          <ToastContainer />
          <div className="login__title">TECHJOBS</div>
          <h3 className="mb-12">Admin Sign In.</h3>
          <p className="mb-12">Enter your credentials</p>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="temia@l5lab.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-image">
              <input
                type={handlePassword}
                id="password"
                name="password"
                placeholder="password"
              />
              <div className="password-img">
                <img
                  src={showPasswordImg}
                  alt="show password"
                  onClick={toggleShowPassword}
                ></img>
              </div>
            </div>
          </div>

          <div className="form-group-radio">
            <input type="radio" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button className="form-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
