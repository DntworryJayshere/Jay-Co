import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navbarb = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<>
			<Nav className="justify-content-center">
				<Nav.Link href="/appointment">Schedule Here</Nav.Link>
				<Nav.Link href="/dashboard">My Profile</Nav.Link>
			</Nav>
			<Nav>
				<Nav.Link onClick={logout} href="#!">
					Logout
				</Nav.Link>
			</Nav>
		</>
	);

	const guestLinks = (
		<Nav className="justify-content-end">
			<Nav.Link href="/login">Login</Nav.Link>
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
