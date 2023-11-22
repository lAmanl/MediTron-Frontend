import React from "react";
import logo from "../../assets/img/landingPage/logo1.svg";

import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="lg:bg-white lg:w-screen lg:h-14 shadow-sm lg:px-16 lg:py-3 flex justify-items-center items-center  w-full p-5" style={{ backgroundColor: '#17202A', color: 'white'}}>
      <img
        src={logo}
        alt="logo"
        className="lg:h-10 lg:pr-3 h-10 pr-4 pl-2 mt-2"
      />
      <h1 className="font-poppins font-bold text-sm lg:text-xl mt-2 mb-2">
        <Link to="/">MediTron</Link>
      </h1>
      <ul className="flex me-auto lg:w-150 justify-evenly  font-lato font-semibold w-84 ms-5 p-5 gap-10">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>

      <button className="bg-primary lg:py-2 lg:px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary py-1 px-2 mr-2">
        {location.pathname === "/register" ? (
          <Link to="/">Login</Link>
        ) : (
          <Link to="/register">Register</Link>
        )}
      </button>
    </nav>
  );
}
