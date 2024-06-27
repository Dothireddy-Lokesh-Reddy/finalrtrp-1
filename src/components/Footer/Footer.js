import React from "react";
import "./Footer.css";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Footer() {
    return <div className="footer-section" style={{marginTop:"20px"}}>
		<div className="component-section">
			<h1>ABOUT restaurant</h1>
			<p>the restaurant offical offcie is present at near gokaraju ranga raju college</p>
			<p><MdLocationOn/> 3rd Street, LA</p>
			<p><FaPhoneAlt/> +1(088) 456 888 (24/7)</p>
			<p><MdEmail/> info@domain.com</p>
		</div>
		<div className="component-section">
			<h1>OUR SERVICES</h1>
			<p>Social Marketing</p>
			<p>Email Marketing</p>
			<p>Refer And Earn</p>
			<p>Creative Management</p>
		</div>
		<div className="component-section">
			<h1>CUSTOMER SUPPORT</h1>
			<p>FAO</p>
			<p>Knowledge Base</p>
			<p>Online Support</p>
			<p>Privacy Policy</p>
			<p>Terms & Condition</p>
		</div>
		<div className="component-section">
			<h1>USEFUL LINKS</h1>
			<p>Our terms</p>
			<p>Company story</p>
			<p>Legal Terms</p>
			<p>Partners</p>
			<p>Recent news</p>
		</div>
	</div>;
}

export default Footer;
