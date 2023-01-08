import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <div id="nav-logo" style={{ backgroundImage: `url(${logo})` }}></div>
        </a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                عن الكورسات
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                منتجات مجانية
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                VIP منطقة
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li id="joingnow">
              <Link className="text-warning nav-link" to="/">
                اشترك الان
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                سجل دخولك
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
