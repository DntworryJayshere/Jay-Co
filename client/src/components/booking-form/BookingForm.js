import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBooking, getBookingById } from '../../actions/booking';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const initialState = {
	appointmentDate: '',
	appointmentTime: '',
	appointmentDuration: '',
	text: '',
};

const BookingForm = ({
	booking: { booking, loading },
	addBooking,
	getBookingById,
	history,
}) => {
	const [formData, setFormData] = useState(initialState);

	useEffect(() => {
		if (!booking) getBookingById();
		if (!loading && booking) {
			const bookingData = { ...initialState };
			for (const key in booking) {
				if (key in bookingData) bookingData[key] = booking[key];
			}
			setFormData(bookingData);
		}
	}, [loading, getBookingById, booking]);

	const {
		appointmentDate,
		appointmentTime,
		appointmentDuration,
		text,
	} = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		addBooking(formData, history, booking ? true : false);
	};

	return (
		<Fragment>
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
														<Form className="form" onSubmit={onSubmit}>
															<Col>
																<Form.Group
																	as={Row}
																	controlId="appointmentDate"
																>
																	<Form.Label>Appointment Date:</Form.Label>
																	<Form.Control
																		name="appointmentDate"
																		value={appointmentDate}
																		onChange={onChange}
																		type="Date"
																		required
																	/>
																</Form.Group>
															</Col>

															<Col>
																<Form.Group
																	as={Row}
																	controlId="appointmentTime"
																>
																	<Form.Label>Appointment Time:</Form.Label>
																	<Form.Control
																		name="appointmentTime"
																		value={appointmentTime}
																		onChange={onChange}
																		type="Time"
																		required
																	/>
																</Form.Group>
															</Col>

															<Col>
																<Form.Group
																	as={Row}
																	controlId="appointmentDuration"
																>
																	<Form.Label>Appointment Duration:</Form.Label>
																	<Form.Control
																		as="select"
																		defaultValue="45 minutes"
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
															</Col>

															<Col>
																<Form.Group controlId="" text>
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
															</Col>

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
		</Fragment>
	);
};

BookingForm.propTypes = {
	addBooking: PropTypes.func.isRequired,
	getBookingById: PropTypes.func.isRequired,
	booking: PropTypes.object.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	booking: state.booking,
});

export default connect(mapStateToProps, { addBooking, getBookingById })(
	BookingForm
);
