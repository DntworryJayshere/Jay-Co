import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register = ({ setAlert, register, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		name: '',
		lastName: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, lastName, email, password, password2 } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();

		if (password !== password2) {
			setAlert('Passwords do not match', 'danger');
		} else {
			register({ name, lastName, email, password });
		}
	};

	if (isAuthenticated) {
		return <Redirect to="/" />;
	}

	return (
		<div className="outerContainer">
			<div className="col-md-12 mx-auto p-0">
				<div className="container py-1">
					<div className="col-md-12 mt-6 bg-white p-0">
						<div className="row justify-content-center">
							<div className="col-md-8 col-sm-11 col-12 mx-auto pb-5">
								<div className="card border-0 shadow-lg my-5">
									<div className="card-body p-0">
										<div className="row justify-content-center">
											<div className="col-lg-12">
												<div className="p-5">
													<div className="text-center">
														<h1 className="h4 text-gray-900 mb-4">
															Create Your Account
														</h1>
														<span>
															WARNING: Refrain from entering sensitive
															information as the administrative routes of this
															application are public. This application should be
															viewed as a sample.
														</span>
													</div>
													<br />
													<Form className="form" onSubmit={onSubmit}>
														<Form.Group controlId="Email">
															<Form.Label>Email address</Form.Label>
															<Form.Control
																name="email"
																value={email}
																onChange={onChange}
																type="email"
																placeholder="Enter email address..."
																required
															/>
														</Form.Group>

														<Form.Group controlId="Password1">
															<Form.Label>Password</Form.Label>
															<Form.Control
																name="password"
																value={password}
																onChange={onChange}
																type="password"
																placeholder="Password"
																required
															/>
														</Form.Group>

														<Form.Group controlId="Password2">
															<Form.Label>Re-Password</Form.Label>
															<Form.Control
																name="password2"
																value={password2}
																onChange={onChange}
																type="password"
																placeholder="Verify password"
																required
															/>
														</Form.Group>

														<Form.Group controlId="FirstName">
															<Form.Label>First Name</Form.Label>
															<Form.Control
																name="name"
																value={name}
																onChange={onChange}
																type="text"
																placeholder="First name"
																required
															/>
														</Form.Group>

														<Form.Group controlId="LastName">
															<Form.Label>Last Name</Form.Label>
															<Form.Control
																name="lastName"
																value={lastName}
																onChange={onChange}
																type="text"
																placeholder="Last name"
																required
															/>
														</Form.Group>

														<Form.Group>
															<Form.Check
																label="Agree to terms and conditions"
																feedback="You must agree before submitting."
																required
															/>
														</Form.Group>

														<div className="SubmitButtonBar">
															<Button
																className="btn btn-user btn-block mt-3"
																name="submit"
																type="submit"
															>
																Submit
															</Button>
														</div>
													</Form>
													<br />
													<div className="text-center mb-4">
														Already registered?
														<Link to="/login">Login</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Register.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
