
import React, { Component, useRef, useState } from 'react';
import VideoBG from '../assets/video/bg.mp4'
//slider
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Submit,ICON_1,ICON_2,ICON_3,USER,USER_1,USER_2,USER_3,USER_4,USER_6,USER_7,USER_8,USER_15,USER_9,USER_11,USER_12,
    USER_13,IMG_1,IMG_2,IMG_3,IMG_4,IMG_5,IMG_6,IMG_7,IMG_8,COURSE1, COURSE2, COURSE3, COURSE4, COURSE,COURSE_1,COURSE_2,COURSE_3,COURSE_4,COURSE_5,COURSE_7,COURSE_8,COURSE_9,COURSE_10,COURSE_11,COURSE_12,COURSE_13,COURSE_14,COURSE_15,BLOG_01,BLOG_02,BLOG_03,BLOG_04} from '../../constant/imagepath_home';
import { Link, withRouter } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
      super(props)
      this.callRef = React.createRef();  
    }

    searchmentee() {
      const {history} = this.props
      history.push("/app/Mentee/search")
    }
    
   render() {
    const settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        centerPadding: '10px',
        arrows: false,
        centerMode: true,
    };

    
  
      return ( 
      <div>
        {/* Banner */}
        <section className="banner-section">
          <video src={VideoBG} autoPlay={true} loop  >
          
            </video>
          <div className="container">
            <div className="banner-content text-center">
              <div className="banner-heading">
                <h2>SELECT YOUR COURSE</h2>
                <p>Own your future learning new skills today</p>
              </div>
              <div className="banner-forms">
                <form className="banner-form">
                  <div className="input-group-form form-style form-br col-md-3 col-12"> <i className="fas fa-map-marker-alt text-warning" />
                    <input disabled className="input-style-form" type="text" placeholder="Learn Today" name="going" />
                  </div>
                  <div className="input-group-form form-style col-md-6 col-12"> 
                    <input disabled className="input-style-form" type="text" placeholder="Apply to Now and Start Your Training" name="going" />
                  </div>
                  <button className="btn button-form col-md-3 col-12" onClick={()=>this.searchmentee()} type="button">Apply Now</button>
                </form>
              </div>
            </div>
            <div className="banner-footer">
              <div className="banner-details">
                <div>
                  <div className="banner-card d-flex align-items-center">
                    <div className="banner-count">
                      <h2>06</h2>
                    </div>
                    <div className="banner-contents">
                      <h2>Certified Accreditation</h2>
                      <a href="#">See all Accredidatin <i className="fas fa-caret-right right-nav-white" /></a>
                    </div>
                  </div>
                </div> 
                <div>
                  <div className="banner-card d-flex align-items-center">
                    <div className="banner-count">
                      <h2>26</h2>
                    </div>
                    <div className="banner-contents">
                      <h2>Programs Courses</h2>
                      <a href="#">See all Courses <i className="fas fa-caret-right right-nav-white" /></a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="banner-card d-flex align-items-center">
                    <div className="banner-count">
                      <h2>7K</h2>
                    </div>
                    <div className="banner-contents">
                      <h2>Students Globally</h2>
                      <a href="#">Contact us <i className="fas fa-caret-right right-nav-white" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Banner */}
        {/* All Courses */}
        <section className="allcourse-section bg-grey">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-4 d-flex flex-wrap">
                <div className="allcourse-card">
                  <div className="allcourse-img">
                    <img src={COURSE_3} alt="" className="img-fluid" />
                  </div>
                  <div className="allcourse-content">
                    <h4 className="mb-3">Microsoft Imagine Academy</h4>
                    <p>Over <span className="text-warning">4</span> Courses</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 d-flex flex-wrap">
                <div className="allcourse-card">
                  <div className="allcourse-img">
                    <img src={COURSE_1} alt="" className="img-fluid" />
                  </div>
                  <div className="allcourse-content">
                    <h4 className="mb-3">CompTIA</h4>
                    <p>Over <span className="text-warning">5</span> Courses</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 d-flex flex-wrap">
                <div className="allcourse-card">
                  <div className="allcourse-img">
                    <img src={COURSE_2} alt="" className="img-fluid" />
                  </div>
                  <div className="allcourse-content">
                    <h4 className="mb-3">International Certificate for Business</h4>
                    <p>Over <span className="text-warning">3</span> Courses</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 d-flex flex-wrap">
                <div className="allcourse-card">
                  <div className="allcourse-img">
                    <img src={COURSE_7} alt="" className="img-fluid" />
                  </div>
                  <div className="allcourse-content">
                    <h4 className="mb-3">MICTSETA</h4>
                    <p>Over <span className="text-warning">8</span> Courses</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 d-flex flex-wrap">
                <div className="allcourse-card">
                  <div className="allcourse-img">
                    <img src={COURSE_4} alt="" className="img-fluid" />
                  </div>
                  <div className="allcourse-content">
                    <h4 className="mb-3">Occupational Health & Safety</h4>
                    <p>Over <span className="text-warning">1</span> Course</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 d-flex flex-wrap">
                <div className="allcourse-card">
                  <div className="allcourse-img">
                    <img src={COURSE_5} alt="" className="img-fluid" />
                  </div>
                  <div className="allcourse-content">
                    <h4 className="mb-3">Services Seta</h4>
                    <p><span className="text-warning">Funeral Services</span> Course</p>
                  </div>
                </div>
              </div>
              <div className="section-btn m-auto">
                <button className="btn btn-course">View all Courses <i className="fas fa-caret-right right-nav-white" /></button>
              </div>
            </div>
          </div>
        </section>
        {/* /All Courses */}
        {/* Popular Courses 
        <section className="popular-course-section">
          <div className="container">
            <div className="section-heading d-flex align-items-center">
              <div className="heading-content">
                <h2><span className="text-weight">Popular</span> Courses <span className="header-right" /></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div> 
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-wrap">
                <div className="popular-course">
                  <div className="courses-head">
                    <div className="courses-img-main">
                      <img src={COURSE_8} alt="" className="img-fluid w-100" />
                    </div>
                    <div className="courses-aut-img">
                      <img src={USER_1} alt="" />
                    </div>
                  </div>
                  <div className="courses-body">
                    <div className="courses-ratings">
                      <ul className="mb-1">
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star not-checked" /> 
                        </li>
                      </ul>
                      <p className="mb-1">Hinata Hyuga</p>
                      <h4 className="mb-0">Introduction Learn – LMS plugin</h4>
                    </div>
                  </div>
                  <div className="courses-border" />
                  <div className="courses-footer d-flex align-items-center">
                    <div className="courses-count">
                      <ul className="mb-0">
                        <li><i className="fas fa-user-graduate mr-1" /> 85</li>
                        <li><i className="far fa-file-alt mr-1" />5</li>
                      </ul>
                    </div>
                    <div className="courses-amt ml-auto">
                      <h3 className="mb-0">$200</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-wrap">
                <div className="popular-course">
                  <div className="courses-head">
                    <div className="courses-img-main">
                      <img src={COURSE_9} alt="" className="img-fluid w-100" />
                    </div>
                    <div className="courses-aut-img">
                      <img src={USER_8} alt="" />
                    </div>
                  </div>
                  <div className="courses-body">
                    <div className="courses-ratings">
                      <ul className="mb-1">
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star not-checked" /> 
                        </li>
                      </ul>
                      <p className="mb-1">Keny White</p>
                      <h4 className="mb-0">From Zero to Hero with Nodejs</h4>
                    </div>
                  </div>
                  <div className="courses-border" />
                  <div className="courses-footer d-flex align-items-center">
                    <div className="courses-count">
                      <ul className="mb-0">
                        <li><i className="fas fa-user-graduate mr-1" /> 125</li>
                        <li><i className="far fa-file-alt mr-1" />3</li>
                      </ul>
                    </div>
                    <div className="courses-amt ml-auto">
                      <h3 className="mb-0">$380</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-wrap">
                <div className="popular-course">
                  <div className="courses-head">
                    <div className="courses-img-main">
                      <img src={COURSE_10} alt="" className="img-fluid w-100" />
                    </div>
                    <div className="courses-aut-img">
                      <img src={USER_2} alt="" />
                    </div>
                  </div>
                  <div className="courses-body">
                    <div className="courses-ratings">
                      <ul className="mb-1">
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star not-checked" /> 
                        </li>
                      </ul>
                      <p className="mb-1">John Paul</p>
                      <h4 className="mb-0">Learn Python – Interactive Tutorial</h4>
                    </div>
                  </div>
                  <div className="courses-border" />
                  <div className="courses-footer d-flex align-items-center">
                    <div className="courses-count">
                      <ul className="mb-0">
                        <li><i className="fas fa-user-graduate mr-1" /> 122</li>
                        <li><i className="far fa-file-alt mr-1" />2</li>
                      </ul>
                    </div>
                    <div className="courses-amt ml-auto">
                      <h3 className="mb-0">$100</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-wrap">
                <div className="popular-course">
                  <div className="courses-head">
                    <div className="courses-img-main">
                      <img src={COURSE_11} alt="" className="img-fluid w-100" />
                    </div>
                    <div className="courses-aut-img">
                      <img src={USER_3} alt="" />
                    </div>
                  </div>
                  <div className="courses-body">
                    <div className="courses-ratings">
                      <ul className="mb-1">
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star not-checked" /> 
                        </li>
                      </ul>
                      <p className="mb-1">Antony Noel</p>
                      <h4 className="mb-0">Your Guide to Photography</h4>
                    </div>
                  </div>
                  <div className="courses-border" />
                  <div className="courses-footer d-flex align-items-center">
                    <div className="courses-count">
                      <ul className="mb-0">
                        <li><i className="fas fa-user-graduate mr-1" /> 320</li>
                        <li><i className="far fa-file-alt mr-1" />8</li>
                      </ul>
                    </div>
                    <div className="courses-amt ml-auto">
                      <h3 className="mb-0">$600</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-wrap">
                <div className="popular-course">
                  <div className="courses-head">
                    <div className="courses-img-main">
                      <img src={COURSE_12} alt="" className="img-fluid w-100" />
                    </div>
                    <div className="courses-aut-img">
                      <img src={USER} alt="" />
                    </div>
                  </div>
                  <div className="courses-body">
                    <div className="courses-ratings">
                      <ul className="mb-1">
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star not-checked" /> 
                        </li>
                      </ul>
                      <p className="mb-1">Hinata Hyuga</p>
                      <h4 className="mb-0">Become a PHP Master and Expertise</h4>
                    </div>
                  </div>
                  <div className="courses-border" />
                  <div className="courses-footer d-flex align-items-center">
                    <div className="courses-count">
                      <ul className="mb-0">
                        <li><i className="fas fa-user-graduate mr-1" /> 215</li>
                        <li><i className="far fa-file-alt mr-1" />3</li>
                      </ul>
                    </div>
                    <div className="courses-amt ml-auto">
                      <h3 className="mb-0">$350</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-wrap">
                <div className="popular-course">
                  <div className="courses-head">
                    <div className="courses-img-main">
                      <img src={COURSE_13} alt="" className="img-fluid w-100" />
                    </div>
                    <div className="courses-aut-img">
                      <img src={USER_8} alt="" />
                    </div>
                  </div>
                  <div className="courses-body">
                    <div className="courses-ratings">
                      <ul className="mb-1">
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star not-checked" /> 
                        </li>
                      </ul>
                      <p className="mb-1">Keny White</p>
                      <h4 className="mb-0">Learning jQuery Mobile for Beginners</h4>
                    </div>
                  </div>
                  <div className="courses-border" />
                  <div className="courses-footer d-flex align-items-center">
                    <div className="courses-count">
                      <ul className="mb-0">
                        <li><i className="fas fa-user-graduate mr-1" /> 128</li>
                        <li><i className="far fa-file-alt mr-1" />2</li>
                      </ul>
                    </div>
                    <div className="courses-amt ml-auto">
                      <h3 className="mb-0">$125</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-wrap">
                <div className="popular-course">
                  <div className="courses-head">
                    <div className="courses-img-main">
                      <img src={COURSE_14} alt="" className="img-fluid w-100" />
                    </div>
                    <div className="courses-aut-img">
                      <img src={USER_2} alt="" />
                    </div>
                  </div>
                  <div className="courses-body">
                    <div className="courses-ratings">
                      <ul className="mb-1">
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star not-checked" /> 
                        </li>
                      </ul>
                      <p className="mb-1">John Paul</p>
                      <h4 className="mb-0">The Art of Black and White Photography</h4>
                    </div>
                  </div>
                  <div className="courses-border" />
                  <div className="courses-footer d-flex align-items-center">
                    <div className="courses-count">
                      <ul className="mb-0">
                        <li><i className="fas fa-user-graduate mr-1" /> 354</li>
                        <li><i className="far fa-file-alt mr-1" />8</li>
                      </ul>
                    </div>
                    <div className="courses-amt ml-auto">
                      <h3 className="mb-0">$620</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-wrap">
                <div className="popular-course">
                  <div className="courses-head">
                    <div className="courses-img-main">
                      <img src={COURSE_15} alt="" className="img-fluid w-100" />
                    </div>
                    <div className="courses-aut-img">
                      <img src={USER_3} alt="" />
                    </div>
                  </div>
                  <div className="courses-body">
                    <div className="courses-ratings">
                      <ul className="mb-1">
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star checked" /> 
                        </li>
                        <li>	<i className="fas fa-star not-checked" /> 
                        </li>
                      </ul>
                      <p className="mb-1">Antony Noel</p>
                      <h4 className="mb-0">HTML5/CSS3 Essentials in 4-Hours</h4>
                    </div>
                  </div>
                  <div className="courses-border" />
                  <div className="courses-footer d-flex align-items-center">
                    <div className="courses-count">
                      <ul className="mb-0">
                        <li><i className="fas fa-user-graduate mr-1" /> 200</li>
                        <li><i className="far fa-file-alt mr-1" />2</li>
                      </ul>
                    </div>
                    <div className="courses-amt ml-auto">
                      <h3 className="mb-0">$400</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-btn m-auto">
                <button className="btn btn-course">View all <i className="fas fa-caret-right right-nav-white" /></button>
              </div>
            </div>
          </div>
        </section>

        */}
        {/* /Popular Courses */}
        {/* Instructor 
        <section className="instructor-section bg-grey">
          <div className="container">
            <div className="section-heading d-flex align-items-center">
              <div className="heading-content">
                <h2><span className="text-weight">Featured </span> Instructor <span className="header-right" /></h2>
                <p>They are highly qualified and trained in their areas</p>
              </div> 
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="instructor-card">
                  <div className="instructor-profile align-items-center">
                    <div className="instructor-img">
                      <img src={USER_8} alt="" />
                    </div>
                    <div className="instructor-desc">
                      <h3 className="mb-0 text-warning">David Lee</h3>
                      <span className="text-primary">Web Developer</span>
                      <p>I've been involved in teaching and education for more than ten years. Always eager to learn, I invested a lot of my time in learning…</p>
                    </div>
                  </div>
                  <div className="instructor-content d-flex">
                    <div className="ic-left">
                      <ul className="mb-0">
                        <li><i className="fas fa-user-graduate mr-1" /> 200</li>
                        <li><i className="far fa-file-alt mr-1" />2</li>
                      </ul>
                    </div>
                    <div className="ic-right ml-auto">
                      <a href="#">View Profile <i className="fas fa-caret-right right-nav" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="instructor-card">
                  <div className="instructor-profile align-items-center">
                    <div className="instructor-img">
                      <img src={USER_7} alt="" />
                    </div>
                    <div className="instructor-desc">
                      <h3 className="mb-0 text-warning">Daziy Millar</h3>
                      <span className="text-primary">PHP Expert</span>
                      <p>I've spend the past three years as a lead instructor at many types of coding schools. As a self taught developer, I've experienced the...</p>
                    </div>
                  </div>
                  <div className="instructor-content d-flex">
                    <div className="ic-left">
                      <ul className="mb-0">
                        <li><i className="fas fa-user-graduate mr-1" /> 200</li>
                        <li><i className="far fa-file-alt mr-1" />2</li>
                      </ul>
                    </div>
                    <div className="ic-right ml-auto">
                      <a href="#">View Profile <i className="fas fa-caret-right right-nav" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-btn m-auto">
                <button className="btn btn-course">Become an Instructor <i className="fas fa-caret-right right-nav-white" /></button>
              </div>
            </div>
          </div>
        </section>
        */}
        {/* /Instructor */}
        {/* Advanced Training 
        <section className="training-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="training-desc">
                  <h2>French for Beginners to Advanced Training</h2>
                  <p className="text-white mb-4">Get course that you need to improve your skills. Our experts are ready to help. Change your life through learing. Over 40,000 courses.</p>
                  <button className="btn btn-main">Find More <i className="fas fa-caret-right right-nav-secondary" /></button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="training-count text-center">
                  <p className="text-white">Time is running out</p>
                  <div className="training-counter">
                    <div className="counters text-center">
                      <div>
                        <p>300</p>
                      </div>
                      <p>Days</p>
                    </div>
                    <div className="counters text-center">
                      <div>
                        <p>30</p>
                      </div>
                      <p>Hours</p>
                    </div>
                    <div className="counters text-center">
                      <div>
                        <p>03</p>
                      </div>
                      <p>Minutes</p>
                    </div>
                    <div className="counters text-center">
                      <div>
                        <p>33</p>
                      </div>
                      <p>Seconds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>*/}
        {/* /Advanced Training */}
        {/* Tab Section 
        
        <section className="tab-section">
          <div className="container">
            <div className="section-heading d-flex align-items-center text-background">
              <div className="heading-content">
                <h2><span className="text-weight">Popular </span> Courses <span className="header-right" /></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="courses-tabs w-100 flex-wrap">
              <div className="course-left tab-content">
                <div className="tab-pane active" id="c1">
                  <div className="p-0 d-flex flex-wrap">
                    <div className="bg-card">
                      <div className="course-bg">
                        <img src={COURSE} alt="" className="img-fluid" />
                      </div>
                      <div className="course-overlay">
                        <div className="course-text">
                          <div className="courses-content">
                            <span>145 NEW</span>
                            <h4>DESIGN COURSE BEGINNER</h4>
                            <h5 className="course-amount mb-0"><sup>$</sup>119<sup>/mo</sup></h5>
                            <p>The ultimate drawing course will show you how to create adavnced art that</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="c2">
                  <div className="p-0 d-flex flex-wrap">
                    <div className="bg-card">
                      <div className="course-bg">
                        <img src={COURSE4} alt="" className="img-fluid" />
                      </div>
                      <div className="course-overlay">
                        <div className="course-text">
                          <div className="courses-content">
                            <span>325 NEW</span>
                            <h4>BUSINESS COURSE BEGINNER</h4>
                            <h5 className="course-amount mb-0"><sup>$</sup>109<sup>/mo</sup></h5>
                            <p>The ultimate drawing course will show you how to create adavnced art that</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="c3">
                  <div className="p-0 d-flex flex-wrap">
                    <div className="bg-card">
                      <div className="course-bg">
                        <img src={COURSE1} alt="" className="img-fluid" />
                      </div>
                      <div className="course-overlay">
                        <div className="course-text">
                          <div className="courses-content">
                            <span>315 NEW</span>
                            <h4>LIFESTYLE COURSE BEGINNER</h4>
                            <h5 className="course-amount mb-0"><sup>$</sup>209<sup>/mo</sup></h5>
                            <p>The ultimate drawing course will show you how to create adavnced art that</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="c4">
                  <div className="p-0 d-flex flex-wrap">
                    <div className="bg-card">
                      <div className="course-bg">
                        <img src={COURSE3} alt="" className="img-fluid" />
                      </div>
                      <div className="course-overlay">
                        <div className="course-text">
                          <div className="courses-content">
                            <span>312 NEW</span>
                            <h4>SOFTWARE COURSE BEGINNER</h4>
                            <h5 className="course-amount mb-0"><sup>$</sup>195<sup>/mo</sup></h5>
                            <p>The ultimate drawing course will show you how to create adavnced art that</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="c5">
                  <div className="p-0 d-flex flex-wrap">
                    <div className="bg-card">
                      <div className="course-bg">
                        <img src={COURSE2} alt="" className="img-fluid" />
                      </div>
                      <div className="course-overlay">
                        <div className="course-text">
                          <div className="courses-content">
                            <span>115 NEW</span>
                            <h4>PHOTO COURSE BEGINNER</h4>
                            <h5 className="course-amount mb-0"><sup>$</sup>251<sup>/mo</sup></h5>
                            <p>The ultimate drawing course will show you how to create adavnced art that</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-right p-0 flex-wrap">
                <div className="tabs-menus">
                  <div className="course-list nav nav-tabs"> 
                    <a href="#c1" data-toggle="tab" className="active">
                      <div className="d-block text-center course-tabs">
                        <i className="far fa-eye" /> 
                        <p>Design</p>
                      </div>
                    </a>
                    <a href="#c2" data-toggle="tab">
                      <div className="d-block text-center course-tabs">
                        <i className="fas fa-business-time" /> 
                        <p>Business</p>
                      </div>
                    </a>
                    <a href="#c3" data-toggle="tab">
                      <div className="d-block text-center course-tabs">
                        <i className="fab fa-rocketchat" /> 
                        <p>Lifestyle</p>
                      </div>
                    </a>
                    <a href="#c4" data-toggle="tab">
                      <div className="d-block text-center course-tabs">
                        <i className="fas fa-laptop-code" /> 
                        <p>Software</p>
                      </div>
                    </a>
                    <a href="#c5" data-toggle="tab">
                      <div className="d-block text-center course-tabs mb-0">
                        <i className="fas fa-camera-retro" /> 
                        <p>Photo</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* /Tab Section */}
        {/* Best Courses 
        <section className="featured-section bg-grey">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="featured-card bg-dark-grey">
                  <h2 className="text-white">Best Courses</h2>
                  <p className="text-white">Courses for all levels cover technical skills, creative techniques, business strategies, and more. We have collected all of the necessary effective study.</p>
                  <a href="#" className="text-white">View More <i className="fas fa-caret-right right-nav-grey" /></a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="featured-card bg-primary">
                  <h2 className="text-white">Top rated Instructors</h2>
                  <p className="text-white">Courses for all levels cover technical skills, creative techniques, business strategies, and more. We have collected all of the necessary effective study.</p>
                  <a href="#" className="text-white">View More <i className="fas fa-caret-right right-nav-white" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        */}
        {/* /Best Courses */}
        {/* Testimonial 
        <section className="testimonial-section bg-grey">
          <div className="container">
            <div className="section-header text-center">
              <h3>What People Says</h3>
              <p className="sub-title">Are you looking to join online institutions? Now it's very simple, Sign up with mentoring</p>
            </div>
            <div className="row">
              <div className="col-md-8 m-auto">
                <div className="testimonial-slider">
                  <div id="customers-testimonials" className="owl-carousel text-center">
                    <div className="item">
                      <img src={USER_1} className="clients m-auto" alt="" />  
                      <i className="fas fa-quote-left quote my-4" />
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nulla et erat venenatis cursus. Nulla facilisi. Vestibulum in arcu eu nulla venenatis auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                      <h6 className="name mt-4">Rashed kabir</h6>
                      <span>Designer</span> 
                    </div>
                    <div className="item">
                      <img src={USER_2} className="clients m-auto" alt="" />  
                      <i className="fas fa-quote-left quote my-4" />
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nulla et erat venenatis cursus. Nulla facilisi. Vestibulum in arcu eu nulla venenatis auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                      <h6 className="name mt-4">Rashed kabir</h6>
                      <span>Designer</span> 
                    </div>
                  </div>
                </div>
                <div className="owl-controls">
                  <div className="owl-nav">
                    <div className="owl-prev" />
                    <div className="owl-next" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* /Testimonial */}
        {/* Blogs 
        <section className="blog-sections">
          <div className="container">
            <div className="section-heading d-flex align-items-center">
              <div className="heading-content">
                <h2><span className="text-weight">From the</span> Blog <span className="header-right" /></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="blog-box blog-grid-box">
                  <div className="blog-grid-box-img">
                    <Link to="/app/Blog/blog-details">
                      <img src={BLOG_01} className="img-fluid" alt="" />
                    </Link>
                  </div>
                  <div className="blog-grid-box-content">
                    <div className="blog-avatar text-center">
                      <p>Posted on 24-01-2021</p>
                    </div>
                    <h4><Link to="/app/Blog/blog-details">Contrary to popular belief, Lorem Ipsum is</Link></h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                    <a href="#" className="text-primary">View More <i className="fas fa-caret-right right-nav" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog-box blog-grid-box">
                  <div className="blog-grid-box-img">
                    <Link to="/app/Blog/blog-details">
                      <img src={BLOG_02} className="img-fluid" alt="" />
                    </Link>
                  </div>
                  <div className="blog-grid-box-content">
                    <div className="blog-avatar text-center">
                      <p>Posted on 24-01-2021</p>
                    </div>
                    <h4> <Link to="/app/Blog/blog-details">The standard chunk of Lorem Ipsum used</Link></h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                    <a href="#" className="text-primary">View More <i className="fas fa-caret-right right-nav" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="blog-box blog-grid-box">
                  <div className="blog-grid-box-img">
                    <Link to="/app/Blog/blog-details">
                      <img src={BLOG_03} className="img-fluid" alt="" />
                    </Link>
                  </div>
                  <div className="blog-grid-box-content">
                    <div className="blog-avatar text-center">
                      <p>Posted on 24-01-2021</p>
                    </div>
                    <h4> <Link to="/app/Blog/blog-details">The standard Lorem Ipsum passage, used</Link></h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                    <a href="#" className="text-primary">View More <i className="fas fa-caret-right right-nav" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      */}
        {/* /Blogs */}
      </div>
      );
   }
}

export default withRouter(Home);
