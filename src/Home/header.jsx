import React, { Component } from 'react';
import { withRouter, Link  } from 'react-router-dom';
import {AppLogo,USER} from '../constant/imagepath_home';

class Header extends Component {
	componentDidMount() {
		$('.main-nav a').on('click', function(e) {
			if($(this).parent().hasClass('has-submenu')) {
				e.preventDefault();
			}
			if(!$(this).hasClass('submenu')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('submenu');
				$(this).next('ul').slideDown(350);
				$(this).addClass('submenu');
			} else if($(this).hasClass('submenu')) {
				$(this).removeClass('submenu');
				$(this).next('ul').slideUp(350);
			}
		});

		$(document).on('click', '#menu_close', function() {
			$('html').removeClass('menu-opened');
			$('.sidebar-overlay').removeClass('opened');
			$('main-wrapper').removeClass('slide-nav');
		});
	}
	render(){
		const {  location } = this.props
		let pathname = location.pathname
		let mentorarray = ["dashboard","Mentor/bookings"]
	return (
		<div>
		 <div className="header-top">
		 <div className="container-fluid">
		   <div className="row">
			 <div className="col-md-8">
			   <div className="left-top">
				 <ul>
				   <li><i className="fas fa-map-marker-alt top-icon" /> 16 Rothery St, Mbombela, 1200</li>
				   <li><i className="fas fa-phone-volume top-icon" /> 013 755 2638</li>
				   <li><i className="fas fa-envelope top-icon" /> info@atti.co.za</li>
				 </ul>
			   </div>
			 </div>
			 <div className="col-md-4">
			   <div className="right-top">
				 <ul>
				   <li>
					 <a href="#"><i className="fab fa-facebook-f top-icons" /></a>
				   </li>
				   <li>
					 <a href="#"><i className="fab fa-instagram top-icons" /></a>
				   </li>
				   <li>
					 <a href="#"><i className="fab fa-linkedin-in top-icons" /></a>
				   </li>
				   <li>
					 <a href="#"><i className="fab fa-twitter top-icons" /></a>
				   </li>
				 </ul>
			   </div>
			 </div>
		   </div>
		 </div>
	   </div>
		<header className="header">
				<nav className="navbar navbar-expand-lg header-nav">
				<div className="container-fluid">
				<div className="navbar-header">
				<a id="mobile_btn" href="">
					<span className="bar-icon">
					<span />
					<span />
					<span />
					</span>
				</a>
				<Link to="/app/index" className="navbar-brand logo">
					<img src={AppLogo} className="img-fluid" alt="Logo" />
				</Link>
				</div>
				<div className="main-menu-wrapper">
				<div className="menu-header">
					<Link to="/app/index" className="menu-logo">
					<img src={AppLogo} className="img-fluid" alt="Logo" />
					</Link>
					<a id="menu_close" className="menu-close" href="#">
					<i className="fas fa-times" />
					</a>
				</div>
				<ul className="main-nav">
					<li className={pathname.includes('index') ?"active" :""} >
					<Link to="/app/index">Home</Link>
					</li>
					<li className={pathname.includes('/Mentor/dashboard') || pathname.includes('Mentor/bookings') ||pathname.includes('schedule-timings')
						 ||pathname.includes('/Mentor/chat')||pathname.includes('invoice')||pathname.includes('reviews')||pathname.includes('/Mentor/blog') 
						 ||pathname.includes('/Mentor/profile-settings')||pathname.includes('mentor-register') ||
						 pathname.includes('profile-mentee') ||pathname.includes('mentee-list') ||
						 pathname.includes('add-blog') ||pathname.includes('edit-blog')  ?"has-submenu active" :"has-submenu"}>
					<a href="">Courses <i className="fas fa-chevron-down" /></a>
					<ul className="submenu">
						<li className={pathname.includes('/Mentor/dashboard') ?"active" :""}><Link  to="/">Microsoft Imagine Academy</Link> 
						<ul className="submenu">
							<li className={pathname.includes('map-grid') ?"active" :""}><Link to="/app/Mentee/map-grid">Microsoft Office Specialist</Link></li>
							<li className={pathname.includes('map-list') ?"active" :""}><Link to="/app/Mentee/map-list">Microsoft Certified Association Certificate</Link></li>
						</ul>
						</li>
						<li className={pathname.includes('Mentor/bookings') ?"active" :""}><Link to="/">International Certificate for Business</Link></li>
						<li className={pathname.includes('schedule-timings') ?"active" :""}><Link to="">CompTIA</Link></li>
						<li className={pathname.includes('schedule-timings') ?"active" :""}><Link to="">Occupational Health</Link></li>
						<li className={pathname.includes('mentee-list') ?"active" :""}><Link to="/app/Mentor/mentee-list">MICTSETA</Link></li>
							<li className={pathname.includes('profile-mentee') ?"active" :""}><Link to="/app/Mentor/profile-mentee">Services Seta</Link></li>
							</ul>
							</li>
						<li className={pathname.includes('voice-call') || pathname.includes('video-call') ||
					pathname.includes('components') || pathname.includes('blank-page') ?"has-submenu active" :"has-submenu"}>
					

					<a href="">Admissions<i className="fas fa-chevron-down" /></a>
					<ul className="submenu">
						<li className={pathname.includes('map-grid') || pathname.includes('map-list') 
						  ?"has-submenu active" :"has-submenu"}>
						<a href="#">Apply Online</a>
						<ul className="submenu">
							<li className={pathname.includes('map-grid') ?"active" :""}><Link to="/app/Mentee/map-grid">Check Status</Link></li>
							<li className={pathname.includes('map-list') ?"active" :""}><Link to="/app/Mentee/map-list">Uploud Documents</Link></li>
						</ul>
						</li>
					</ul>
					</li>	
					<li className={pathname.includes('voice-call') || pathname.includes('video-call') ||
					pathname.includes('components') || pathname.includes('blank-page') ?"has-submenu active" :"has-submenu"}>
					<a href="">Registrations <i className="fas fa-chevron-down" /></a>
					<ul className="submenu">
						<li className={pathname.includes('voice-call') ?"active" :""}><Link to="/app/Pages/voice-call">Register Online</Link></li>
						<li className={pathname.includes('video-call') ?"active" :""}><Link to="/app/Pages/video-call">Check registration Status</Link></li>
									
						</ul>
					</li>
					<li>
					<a href="/template-1/admin/index" target="_blank">AboutUs</a>
					</li>
					<li className="login-link">
					<Link to="/login">Login / Signup</Link>
					</li>
				</ul>		 
				</div>		 
				{location.pathname.includes("p/index") ? <ul className="nav header-navbar-rht">
					<li className="nav-item">
						<Link className="nav-link header-register" to="/login">Login</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link header-login" to="/register">Register</Link>
					</li>
				</ul> :
				<ul className="nav header-navbar-rht">
					{/* User Menu */}
					<li className="nav-item dropdown has-arrow logged-item">
					<a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
						<span className="user-img">
						<img className="rounded-circle" src={USER} width={31} alt="Darren Elder" />Jonathan Doe
						</span>
					</a>
					<div className="dropdown-menu dropdown-menu-right">
						<div className="user-header">
						<div className="avatar avatar-sm">
							<img src={USER} alt="User Image" className="avatar-img rounded-circle" />
						</div>
						<div className="user-text">
							<h6>Jonathan Doe</h6>
							<p className="text-muted mb-0">Mentor</p>
						</div>
						</div>
						<Link className="dropdown-item" to="/app/Mentor/dashboard">Dashboard</Link>
						<Link className="dropdown-item" to="/app/Mentor/profile-settings">Profile Settings</Link>
						<Link className="dropdown-item" to="/login">Logout</Link>
					</div>
					</li>
					{/* /User Menu */}
				</ul> }
				</div>
			</nav>
		</header>
		</div>
  	);
}
		
}
 
 
export default withRouter(Header);