import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Footer() {
	return (
		<>
			<div className="footer-container">
				<section className="footer-subscription">
					<p className="footer-subscription-heading">
						Join the newsletter to receive our best scheduling deals
					</p>
					<p className="footer-subscription-text">
						You can unsubscribe at any time.
					</p>
					<Form>
						<input
							className="footer-input"
							name="email"
							type="email"
							placeholder="Your Email"
						/>
						<Button variant="light">Subscribe</Button>
					</Form>
				</section>
				<div className="footer-links">
					<div className="footer-link-wrapper">
						<div className="footer-link-items">
							<h2>About</h2>
							<Link to="/">How it works</Link>
							<Link to="/">Testimonials</Link>
							<Link to="/">Careers</Link>
							<Link to="/">Terms of Service</Link>
						</div>
						<div className="footer-link-items">
							<h2>Contact</h2>
							<Link to="/">Contact</Link>
							<Link to="/">Support</Link>
							<Link to="/">Important</Link>
							<Link to="/">Sponsorships</Link>
						</div>
					</div>
					<div className="footer-link-wrapper">
						<div className="footer-link-items">
							<h2>Videos</h2>
							<Link to="/">Submit</Link>
							<Link to="/">Ambassadors</Link>
							<Link to="/">Agency</Link>
							<Link to="/">Influencer</Link>
						</div>
						<div className="footer-link-items">
							<h2>Social</h2>
							<Link to="/">Github</Link>
							<Link to="/">Linkedin</Link>
							<Link to="/">Instagram</Link>
							<Link to="/">Facebook</Link>
						</div>
					</div>
				</div>
				<section className="social-media">
					<div className="social-media-wrap">
						<div className="website-rights">Jay&Co © 2020</div>
						<div className="social-icons">
							<Link
								className="social-icon-link github"
								to="/"
								target="_blank"
								aria-label="Github"
							>
								<i className="fab fa-github" />
							</Link>
							<Link
								className="social-icon-link twitter"
								to="/"
								target="_blank"
								aria-label="LinkedIn"
							>
								<i className="fab fa-linkedin" />
							</Link>
							<Link
								className="social-icon-link instagram"
								to="/"
								target="_blank"
								aria-label="Instagram"
							>
								<i className="fab fa-instagram" />
							</Link>
							<Link
								className="social-icon-link facebook"
								to="/"
								target="_blank"
								aria-label="Facebook"
							>
								<i className="fab fa-facebook-f" />
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default Footer;
