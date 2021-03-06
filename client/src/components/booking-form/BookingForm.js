import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBooking } from '../../actions/booking';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const BookingForm = ({ addBooking }) => {
	const [formData, setFormData] = useState({
		appointmentDate: '',
		appointmentTime: '',
		appointmentDuration: '',
		text: '',
	});

	const {
		appointmentDate,
		appointmentTime,
		appointmentDuration,
		text,
	} = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		addBooking({ appointmentDate, appointmentTime, appointmentDuration, text });
	};

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
													<Form onSubmit={onSubmit}>
														<Form.Group>
															<Form.Label>Appointment Date:</Form.Label>
															<Form.Control
																name="appointmentDate"
																value={appointmentDate}
																onChange={onChange}
																type="Date"
																required
															/>
														</Form.Group>

														<Form.Group>
															<Form.Label>Appointment Time:</Form.Label>
															<Form.Control
																name="appointmentTime"
																value={appointmentTime}
																onChange={onChange}
																type="Time"
																required
															/>
														</Form.Group>

														<Form.Group>
															<Form.Label>Appointment Duration:</Form.Label>
															<Form.Control
																as="select"
																name="appointmentDuration"
																value={appointmentDuration}
																onChange={onChange}
																type="Time"
																required
															>
																<option></option>
																<option>30 minutes</option>
																<option>45 minutes</option>
																<option>1 hour</option>
																<option>1 hour 30 minutes</option>
																<option>2 hours</option>
															</Form.Control>
														</Form.Group>

														<Form.Group>
															<Form.Label>Comment:</Form.Label>
															<Form.Control
																as="textarea"
																rows={3}
																name="text"
																value={text}
																placeholder="Id like to discuss..."
																onChange={onChange}
																type="text"
															/>
														</Form.Group>

														<div id="bookingFormButton">
															<Button
																name="submit"
																className="btn btn-block mt-3 btn-success"
																type="submit"
																value="Submit"
															>
																Confirm
															</Button>
														</div>
													</Form>
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

BookingForm.propTypes = {
	addBooking: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

export default connect(null, { addBooking })(BookingForm);
