import React from 'react';
import {AppLogo} from '../constant/imagepath_home';
import { Link } from 'react-router-dom';
import COURSE from '../Home/assets/img/course/1.jpg'
import COURSE2 from '../Home/assets/img/course/2.jpg'
import COURSE3 from '../Home/assets/img/course/3.jpg'
import COURSE4 from '../Home/assets/img/course/4.jpg'
import COURSE5 from '../Home/assets/img/course/5.jpg'
import COURSE6 from '../Home/assets/img/course/6.jpg'

const Footer = () => {
	
	return (
      <footer className="footer">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="container">
            <div className="subsccribe-item">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="subscribe-item">
                    <div className="section-title">
                      <h2>Sign Up For Newsletter</h2>
                      <p>Join 60.000+ Subscribers</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="subscribe-item">
                    <form className="newsletter-form">
                      <input type="email" className="form-control" placeholder="Enter your email" autoComplete="off" />
                      <button className="btn cmn-btn disabled" type="submit"><i className="fas fa-paper-plane mr-2" />Subscribe Now</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-about">
                  <h2 className="footer-title">About Mentoring</h2>
                  <div className="footer-about-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris </p>
                  </div>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">For Mentee</h2>
                  <ul>
                  <li><Link to="/app/Mentee/search">Search Mentors</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/app/Mentee/booking">Booking</Link></li>
                    <li><Link to="/app/Mentee/dashboard-mentee">Mentee Dashboard</Link></li>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">For Mentors</h2>
                  <ul>
                  <ul>
                    <li><Link to="/app/Mentor/appointments">Appointments</Link></li>
                    <li><Link to="/app/Mentor/chat">Chat</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/app/Mentor/dashboard">Mentor Dashboard</Link></li>
                  </ul>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-social">
                  <h2 className="footer-title">Instagram</h2>
                  <div className="footer-social-info d-block">
                    <div className="footer-insta-info">
                      <div><img src={COURSE} alt="" className="img-fluid" /></div>
                      <div><img src={COURSE2} alt="" className="img-fluid" /></div>
                      <div><img src={COURSE3} alt="" className="img-fluid" /></div>
                      <div><img src={COURSE4} alt="" className="img-fluid" /></div>
                      <div><img src={COURSE6} alt="" className="img-fluid" /></div>
                      <div><img src={COURSE2} alt="" className="img-fluid" /></div>
                      <div><img src={COURSE4} alt="" className="img-fluid" /></div>
                      <div><img src={COURSE5} alt="" className="img-fluid" /></div>
                      <div><img src={COURSE6} alt="" className="img-fluid" /></div>
                    </div>
                  </div>
                </div>
                {/* /Footer Widget */}
              </div>
            </div>
          </div>
        </div>
        {/* /Footer Top */}
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            {/* Copyright */}
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="copyright-text text-left">
                    <p>Terms - Privacy Policy &amp; Safety - Send feedback</p>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="copyright-text text-md-right">
                    <p>© 2020 Mentoring. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Copyright */}
          </div>
        </div>
        {/* /Footer Bottom */}
      </footer>
  );
};

export default Footer;