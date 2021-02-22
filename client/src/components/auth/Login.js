import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = ({ login, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		login(email, password);
	};

	if (isAuthenticated) {
		return <Redirect to="/" />;
	}

	return (
		<div className="container">
			<Form className="form" onSubmit={onSubmit}>
				<Form.Group controlId="FirstName">
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={onChange}
						required
					/>
				</Form.Group>

				<Form.Group controlId="LastName">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						name="password"
						value={password}
						onChange={onChange}
						minLength="6"
					/>
				</Form.Group>

				<div className="SubmitButtonBar">
					<Button variant="dark" name="submit" type="submit" value="Login">
						Submit
					</Button>

					<div className="OtherButtons">
						<Link to="/register">
							<Button variant="success">Register</Button>
						</Link>

						<Link className="OtherButtons" to="/">
							<Button variant="danger">Go Back</Button>
						</Link>
					</div>
				</div>
			</Form>
		</div>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
