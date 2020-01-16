import React, { Component } from "react";
import "./content.css";
import gambar from "../../img/amar.jpg";
import { NavLink } from "react-router-dom";
import WelcomeS from "../../Container/Welcome/Welcome";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="body cf">
          <div className="content-kiri">
            <div className="gambaar">
              <img src={gambar} alt="" />
            </div>
            <p>Front-End Developer</p>
          </div>
          <div className="content-kanan">
            <div className="content-kanan-navbar">
              <ul>
                <NavLink exact to="/" activeClassName="active">
                  <li>Welcome</li>
                  <i className="fas fa-house-damage"></i>
                </NavLink>
                <NavLink to="/profile" activeClassName="active">
                  <li>About Me</li>
                  <i className="fas fa-user"></i>
                </NavLink>
                <NavLink to="/portofolio" activeClassName="active">
                  <li>Portofolio</li>
                  <i className="fas fa-house-damage"></i>
                </NavLink>
                <NavLink to="/contact" activeClassName="active">
                  <li>About Me</li>
                  <i className="fab fa-github-alt"></i>
                </NavLink>
              </ul>
            </div>
            <div className="content-text">
              <WelcomeS/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Content;
