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
		<div className="outerContainer">
			<div className="col-md-12 mx-auto p-0">
				<div className="container py-1">
					<div className="col-md-12 mt-6 bg-white p-0">
						<div className="row justify-content-center">
							<div className="col-md-6 col-sm-11 col-12 mx-auto pb-5">
								<div className="card border-0 shadow-lg my-5">
									<div className="card-body p-0">
										<div className="row justify-content-center">
											<div className="col-lg-12">
												<div className="p-5">
													<div className="text-center">
														<h1 className="h4 text-gray-900 mb-4">
															Welcome, Please Login
														</h1>
													</div>

													<Form className="form" onSubmit={onSubmit}>
														<Form.Group controlId="FirstName">
															<Form.Label>Email Address</Form.Label>
															<Form.Control
																className="form-control-user"
																type="email"
																name="email"
																placeholder="Enter email address..."
																value={email}
																onChange={onChange}
																required
															/>
														</Form.Group>

														<Form.Group controlId="LastName">
															<Form.Label>Password</Form.Label>
															<Form.Control
																className="form-control-user"
																type="password"
																placeholder="Password"
																name="password"
																value={password}
																onChange={onChange}
																minLength="6"
															/>
														</Form.Group>

														<div className="SubmitButtonBar">
															<Button
																className="btn btn-user btn-block mt-3"
																name="submit"
																type="submit"
																value="Login"
															>
																Login
															</Button>
														</div>
													</Form>
													<br />

													<div className="text-center">
														<Link className="small" to="/samplePage">
															Forgot Password?
														</Link>
													</div>
													<div className="text-center">
														<Link className="small" to="/register">
															Create an Account!
														</Link>
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

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
