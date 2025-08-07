import React from 'react';
import img1 from '../assets/banner1.jpg';
import img2 from '../assets/banner2.jpg';
import img3 from '../assets/banner3.jpg';
import img4 from '../assets/banner4.jpg';
import img5 from '../assets/about1.jpg';
import img6 from '../assets/about2.jpg';
import img7 from '../assets/sign.png';
import img8 from '../assets/img1.png';
import gardenImg1 from '../assets/home-s1.jpg';
import gardenImg2 from '../assets/home-s2.jpg';
import gardenImg3 from '../assets/home-s3.jpg';
import test1 from '../assets/testi2.jpg';
import test2 from '../assets/testi3.jpg';

import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { RiFlowerFill } from "react-icons/ri";
import { FaLeaf, FaCut, FaThumbsUp, FaLightbulb } from "react-icons/fa";
import { IoWaterSharp } from "react-icons/io5";
import { FaRegHandPeace } from "react-icons/fa6";

import './Home.css';

const Home = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[img1, img2, img3, img4].map((img, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={img} className="custom-carousel-img" alt={`Hero slide ${index + 1}`} />
              <div className="d-flex justify-content-sm-center align-items-sm-center text-sm-center min-vh-100">
                <div className="slide-box">
                  <h1>
                    {[
                      'Make Your Home Look Lively',
                      'Beautiful Landscape Starts Here',
                      'Professional Gardening Care',
                      'Proper Greening & Smart Design'
                    ][index]}
                  </h1>
                  <p>Enhance your surroundings with lush greenery and expert gardening services.</p>
                  <a href="#" className="learn-btn btn btn-success mt-3">LEARN MORE</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev d-none d-sm-block" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next d-none d-sm-block" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container py-5 my-5">
        <div className="row align-items-center gy-4 gy-md-0">
          <div className="col-md-6 position-relative">
            <img src={img5} className="img-fluid rounded shadow main-img" alt="Gardener working in garden" />
            <img src={img6} className="img-fluid rounded shadow overlay-img" alt="Team collaborating in garden" />
          </div>
          <div className="col-md-6 text-center text-md-start">
            <h6 className="text-uppercase fst-italic fs-4">
              Since <span className="badge bg-success">2000</span>
            </h6>
            <h2 className="display-5 fw-bold">
              We Have <span className="text-success">30+</span> Years of Experience
            </h2>
            <p className="fst-italic mt-3">Transforming spaces with greenery since 1990.</p>
            <p className="text-secondary">Our professional team provides creative, sustainable, and cost-effective gardening solutions.</p>
            <img src={img7} alt="Company Signature" className="img-fluid mt-3" style={{ maxWidth: '120px' }} />
          </div>
        </div>
      </div>


      <div className="container">
        <div className="text-center mb-4">
          <div className="fw-light">WHAT WE DO</div>
          <div className="fw-bolder fs-1">Our <span className="text-success">Services</span></div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4 my-5">
          {[
            { icon: <RiFlowerFill size={40} color="green" />, title: "Garden Care" },
            
            { icon: <FaLeaf size={40} color="green" />, title: "Tree Planting" },
            { icon: <FaCut size={40} color="green" />, title: "Cutting Leaves" },
            { icon: <IoWaterSharp size={40} color="green" />, title: "Water Gardening" },
          ].map((service, i) => (
            <div className="col" key={i}>
              <div className="card h-100 shadow-sm p-4">
                <div className="d-flex">
                  <div className="me-3">{service.icon}</div>
                  <div>
                    <h5 className="fw-bold">{service.title}</h5>
                    <p className="text-muted">Premium service for every garden need.</p>
                    <a href="#" className="text-dark fw-bold">Read More &gt;</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mb-5">
        <div className="text-center mb-4">
          <div className="fw-light">SERVICES</div>
          <div className="fw-bolder fs-1">We Provide the Best <br /><span className="text-success">Solutions</span></div>
        </div>

        <div className="row mt-5 g-4 justify-content-center">
          {[gardenImg1, gardenImg2, gardenImg3].map((img, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <div className="card shadow-sm h-100">
                <img src={img} className="card-img-top" alt={`Service ${i + 1}`} />
                <div className="card-body text-start">
                  <h5 className="card-title fw-bold">
                    {["Water Gardening", "Landscaping Design", "Lawn Maintenance"][i]}
                  </h5>
                  <p className="card-text text-muted">Customized plans to beautify your outdoor space.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row align-items-center px-5 my-5">
        <div className="col-lg-5 mb-4 text-center">
          <img src={img8} alt="Company overview" className="img-fluid" />
        </div>
        <div className="col-lg-7">
          <p className="text-uppercase text-muted mb-1">Welcome</p>
          <h2 className="fw-bold mb-5">About <span className="text-success">Us</span></h2>
          <div className="row g-4">
            {[
              { icon: <FaThumbsUp />, title: "Our Mission" },
              { icon: <FaRegHandPeace />, title: "Our Vision" },
              { icon: <FaLightbulb />, title: "Who We Are" },
              { icon: <FaLeaf />, title: "What We Do" },
            ].map((item, i) => (
              <div key={i} className="col-sm-6 d-flex">
                <div className="icon-circle me-3">{item.icon}</div>
                <div>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted mb-0">We strive to build greener, more vibrant communities.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed-bg-slide d-flex align-items-center justify-content-center text-center text-white">
        <div className="container px-3 px-sm-5">
          <h1 className="fw-bold px-2 px-md-5 responsive-heading">
            Extend Your Home With a Beautiful Garden
          </h1>
          <p className="lead responsive-paragraph">
            From design to care, we help bring your garden vision to life with excellence.
          </p>
          <div className="mt-4 d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2">
            <a href="#" className="btn btn-light btn-lg fw-bold w-sm-auto">GET STARTED</a>
            <a href="#" className="btn btn-success btn-lg fw-bold w-sm-auto">CONTACT US</a>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="text-center mb-4">
          <h5 className="fw-light">TESTIMONIALS</h5>
          <h2 className="fw-bold fs-1">
            Happy With Our Customers & <br />
            <span className="text-success">Clients</span>
          </h2>
        </div>

        <div id="testimonialSlider" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                {[test1, test2].map((img, idx) => (
                  <div key={idx} className={`col-12 col-md-6 mb-4 ${idx === 1 ? 'd-none d-md-block' : ''}`}>
                    <div className="card testimonial-card p-4 shadow-sm h-100 text-center text-md-start">
                      <FaQuoteLeft className="text-success fs-1 mb-3" />
                      <p className="fw-bold">“Absolutely loved the result!”</p>
                      <p className="text-muted">
                        Great team and service. My garden has never looked better.
                      </p>
                      <h6 className="mt-3 fw-bold">Johnson William</h6>
                      <div className="text-success mb-2">
                        {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                      </div>
                      <img src={img} className="rounded-circle mx-auto d-block" width="60" height="60" alt={`Client ${idx + 1}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
                {[test1, test2].map((img, idx) => (
                  <div key={idx} className={`col-12 col-md-6 mb-4 ${idx === 1 ? 'd-none d-md-block' : ''}`}>
                    <div className="card testimonial-card p-4 shadow-sm h-100 text-center text-md-start">
                      <FaQuoteLeft className="text-success fs-1 mb-3" />
                      <p className="fw-bold">“Highly professional team.”</p>
                      <p className="text-muted">
                        They delivered beyond expectations. 100% recommended.
                      </p>
                      <h6 className="mt-3 fw-bold">Client {idx + 3}</h6>
                      <div className="text-success mb-2">
                        {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                      </div>
                      <img src={img} className="rounded-circle " width="60" height="60" alt={`Client ${idx + 3}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className="d-flex justify-content-between align-items-center mt-4 flex-column flex-md-row gap-3">
            <button className="carousel-control-prev position-static" type="button" data-bs-target="#testimonialSlider" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <div className="carousel-indicators position-static mb-0">
              <button type="button" data-bs-target="#testimonialSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#testimonialSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <button className="carousel-control-next position-static" type="button" data-bs-target="#testimonialSlider" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
