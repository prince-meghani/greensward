import React from 'react';
import {
  FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram,
  FaPhone, FaMapMarkerAlt
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">

        <div className="row text-center text-md-start align-items-center mb-4">
          <div className="col-12 col-md-3 mb-3 mb-md-0">
            <span style={{ fontWeight: 'bold', fontSize: '30px', color: 'white' }}>Greensward</span>
          </div>
          <div className="col-12 col-md-6 px-md-5 text-secondary mb-3 mb-md-0">
            <p className="mb-0">
              Duis imperdiet sapien tortor, vitae congue diam auctor vitae. Aliquam eget turpis ornare, euismod ligula eget, venenatis dui.
            </p>
          </div>
          <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-end">
            <a href="#"><FaFacebookF className="text-light mx-2 fs-5" /></a>
            <a href="#"><FaTwitter className="text-light mx-2 fs-5" /></a>
            <a href="#"><FaGooglePlusG className="text-light mx-2 fs-5" /></a>
            <a href="#"><FaInstagram className="text-light mx-2 fs-5" /></a>
          </div>
        </div>

        <hr className="border-secondary" />

        
        <div className="row text-center text-md-start">
          
          
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h5 className="mb-3 fw-bold">Get In Touch</h5>
            <p className='text-secondary'><MdEmail className="me-2" /> info@example.com</p>
            <p className='text-secondary'><FaPhone className="me-2" /> +44-000-888-999</p>
            <p className='text-secondary'><FaMapMarkerAlt className="me-2" /> London, 235 Terry, 10001</p>
          </div>

          
          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <h5 className="mb-3 fw-bold">Archives</h5>
            <p className='text-secondary mb-1'>October 2021</p>
            <p className='text-secondary mb-1'>August 2021</p>
          </div>

  
          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <h5 className="mb-3 fw-bold">Categories</h5>
            <p className='text-secondary mb-1'>Farming</p>
            <p className='text-secondary mb-1'>Gardening</p>
            <p className='text-secondary mb-1'>Uncategorized</p>
          </div>

         
          <div className="col-12 col-md-6 col-lg-5 mb-4">
            <h5 className="mb-3 fw-bold">Newsletter</h5>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email Address" />
              <button className="btn btn-success" type="button">
                <i className="fa fa-paper-plane"></i>
              </button>
            </div>
            <p className='text-secondary'>Subscribe to our mailing list and get updates to your email inbox.</p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
