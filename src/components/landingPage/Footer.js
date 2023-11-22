import React from "react";
import Instagram from "../../assets/img/landingPage/instagram.png"
import LinkedIn from "../../assets/img/landingPage/linkedin.png"
import Twitter from "../../assets/img/landingPage/twitter.png"
import Facebook from "../../assets/img/landingPage/facebook.png"
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  return (
    <footer className='text-center text-lg-start' style={{ backgroundColor: '#17202A' }}>
      <div class="container p-4">
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-2 mb-md-2">
            <h5 class="text-uppercase text-light h3">MediTron</h5>
            <br></br>
            <p className='text-light'>The primary goal of <b>MediTron</b> is to enhance the efficiency, accuracy, and quality of healthcare services while also improving overall patient care.</p>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0 ps-lg-5">
            <h5 class="mb-2 text-light h4">Quick Links</h5>

            <ul class="list-unstyled">
              <li>
                <Link className="text-light" to="/">Home</Link>
              </li>
              <li>
                <Link className="text-light" to="/features">Features</Link>
              </li>
              <li>
                <Link className="text-light" to="/about">About</Link>
              </li>
              <li>
                <Link className="text-light" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase text-light h4">Contact Info</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-light nav-link">Vellore Institute of Chennai</a>
              </li>
              <li>
                <a href="mailto:xyz@gmail.com" class="text-light nav-link">aman.sharma2021b@vitstudent.ac.in</a>
              </li>
              <li>
                <a href="tel:+919876543210" class="text-light nav-link">8558058972</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase text-light h4">Social Media</h5>

            <ul class="list-unstyled mb-0 text-center">
              <li>
                <a href="https://instagram.com/" target='_blank' class="text-light nav-link"><img src={Instagram} alt="instagram"></img></a>
              </li>
              <li>
                <a href="https://facebook.com/" target='_blank' class="text-light nav-link"><img src={Facebook} alt="facebook" ></img></a>
              </li>
              <li>
                <a href="https://twitter.com/" target='_blank' class="text-light nav-link"><img src={Twitter} alt="twitter"></img></a>
              </li>
              <li>
                <a href="https://linkedin.com/" target='_blank' class="text-light nav-link"><img src={LinkedIn} alt="linkedIn"></img></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='text-center text-light' style={{ backgroundColor: '#212F3C ' }}>Copyright © 2023 Team-426</div>
    </footer>
  );
}
