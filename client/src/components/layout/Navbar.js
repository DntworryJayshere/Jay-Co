import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

const Navbarb = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<>
			<Nav className="justify-content-center">
				<Nav.Item>
					<Nav.Link href="/create-booking">Schedule Here</Nav.Link>
				</Nav.Item>
			</Nav>
			<Nav className="justify-content-center">
				<Nav.Item>
					<Nav.Link href="/dashboard">Profile</Nav.Link>
				</Nav.Item>
			</Nav>
			<Nav>
				<Nav.Item>
					<Nav.Link onClick={logout} href="#!">
						Logout
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</>
	);

	const guestLinks = (
		<Nav className="justify-content-end">
			<Nav.Item>
				<Nav.Link href="/login">Login</Nav.Link>
			</Nav.Item>
		</Nav>
	);

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="/">Jay&Co</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse
				className="justify-content-end"
				id="responsive-navbar-nav"
			>
				{!loading && (
					<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
				)}
			</Navbar.Collapse>
		</Navbar>
	);
};

Navbarb.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbarb);
