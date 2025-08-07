import React from 'react';
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram, FaMoon, FaPhone } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoSearchCircleSharp } from "react-icons/io5";

import './Navbar.css';

const Navbar = () => {
  return (
    <>
   

      <div className="top-bar py-2 px-3 bg-dark text-white d-none d-md-block">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
            <div className="d-flex flex-wrap align-items-center gap-3 text-white small">
              <span>Have any question?</span>
              <span><FaPhone className="me-1" /> +1(21) 234 4567</span>
              <span><MdOutlineEmail className="me-1" /> mail@example.com</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <a href="#" className="text-white"><RiFacebookFill /></a>
              <a href="#" className="text-white"><AiOutlineTwitter /></a>
              <a href="#" className="text-white"><FaInstagram /></a>
              <a href="#" className="text-white"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>

     
      <nav className="navbar navbar-expand-lg main-navbar bg-success navbar-dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Greensward</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav text-uppercase fw-bold">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className='text-white my-2'><IoSearchCircleSharp size={30} /></li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
