import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerSubscriber } from '../../actions/auth';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Footer = ({ registerSubscriber }) => {
	const [formData, setFormData] = useState({
		email: '',
	});

	const { email } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		registerSubscriber({ email });
	};

	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">
					Join the newsletter to receive our best scheduling deals
				</p>
				<p className="footer-subscription-text">
					You can unsubscribe at any time.
				</p>
				<Form onSubmit={onSubmit}>
					<Form.Group controlId="Email">
						<Form.Control
							className="footer-input"
							name="email"
							value={email}
							onChange={onChange}
							type="email"
							placeholder="Enter email address..."
							required
						/>
						<br />
						<Button name="submit" type="submit" value="Submit" variant="light">
							Subscribe
						</Button>
					</Form.Group>
				</Form>
			</section>
			<div className="footer-links">
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>About</h2>
						<Link to="/adminPage">Admin Page</Link>
						<Link to="/samplePage">How it works</Link>
						<Link to="/samplePage">Careers</Link>
						<Link to="/samplePage">Terms of Service</Link>
					</div>
					<div className="footer-link-items">
						<h2>Contact</h2>
						<Link to="/samplePage">Contact</Link>
						<Link to="/samplePage">Support</Link>
						<Link to="/samplePage">Important</Link>
						<Link to="/samplePage">Sponsorships</Link>
					</div>
				</div>
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>Videos</h2>
						<Link to="/samplePage">Submit</Link>
						<Link to="/samplePage">Ambassadors</Link>
						<Link to="/samplePage">Agency</Link>
						<Link to="/samplePage">Influencer</Link>
					</div>
					<div className="footer-link-items">
						<h2>Social</h2>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/DntworryJayshere/jay-and-co"
						>
							Github
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.linkedin.com/in/jay-rodriguez-58133378/"
						>
							Linkedin
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.instagram.com/"
						>
							Instagram
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.facebook.com/"
						>
							Facebook
						</a>
					</div>
				</div>
			</div>
			<section className="social-media">
				<div className="social-media-wrap">
					<div className="website-rights">Jay&Co © 2020</div>
					<div className="social-icons">
						<a
							rel="noopener noreferrer"
							className="social-icon-link github"
							href="https://github.com/DntworryJayshere/jay-and-co"
							target="_blank"
							aria-label="Github"
						>
							<i className="fab fa-github" />
						</a>
						<a
							rel="noopener noreferrer"
							className="social-icon-link twitter"
							href="https://www.linkedin.com/in/jay-rodriguez-58133378/"
							target="_blank"
							aria-label="LinkedIn"
						>
							<i className="fab fa-linkedin" />
						</a>
						<a
							rel="noopener noreferrer"
							className="social-icon-link instagram"
							href="https://www.instagram.com/"
							target="_blank"
							aria-label="Instagram"
						>
							<i className="fab fa-instagram" />
						</a>
						<a
							rel="noopener noreferrer"
							className="social-icon-link facebook"
							href="https://www.facebook.com/"
							target="_blank"
							aria-label="Facebook"
						>
							<i className="fab fa-facebook-f" />
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

Footer.propTypes = {
	registerSubscriber: PropTypes.func.isRequired,
};

export default connect(null, { registerSubscriber })(Footer);
