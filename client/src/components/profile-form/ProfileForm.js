import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const initialState = {
	dob: '',
	phone: '',
	address1: '',
	address2: '',
	city: '',
	statee: '',
	zip: '',
};

const ProfileForm = ({
	profile: { profile, loading },
	createProfile,
	getCurrentProfile,
	history,
}) => {
	const [formData, setFormData] = useState(initialState);

	useEffect(() => {
		if (!profile) getCurrentProfile();
		if (!loading && profile) {
			const profileData = { ...initialState };
			for (const key in profile) {
				if (key in profileData) profileData[key] = profile[key];
			}
			setFormData(profileData);
		}
	}, [loading, getCurrentProfile, profile]);

	const { dob, phone, address1, address2, city, statee, zip } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		createProfile(formData, history, profile ? true : false);
	};

	return (
		<Fragment>
			<div className="container form">
				<h2>Edit Your Profile</h2>

				<Form className="form" onSubmit={onSubmit}>
					<div className="form-group">
						<Form.Row>
							<Form.Group as={Col} controlId="dob">
								<Form.Label>Date Of Birth*</Form.Label>
								<Form.Control
									type="date"
									placeholder="01/01/2000"
									name="dob"
									value={dob}
									onChange={onChange}
									required
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="phone">
								<Form.Label>Phone Number*</Form.Label>
								<Form.Control
									type="text"
									placeholder="123456789"
									name="phone"
									value={phone}
									onChange={onChange}
									required
								/>
							</Form.Group>
						</Form.Row>

						<Form.Group controlId="formGridAddress1">
							<Form.Label>Address*</Form.Label>
							<Form.Control
								type="text"
								placeholder="1234 Main St"
								name="address1"
								value={address1}
								onChange={onChange}
								required
							/>
						</Form.Group>

						<Form.Group controlId="formGridAddress2">
							<Form.Label>Address 2</Form.Label>
							<Form.Control
								type="text"
								placeholder="Apartment, studio, or floor"
								name="address2"
								value={address2}
								onChange={onChange}
							/>
						</Form.Group>

						<Form.Row>
							<Form.Group as={Col} controlId="formGridCity">
								<Form.Label>City*</Form.Label>
								<Form.Control
									type="text"
									placeholder="City"
									name="city"
									value={city}
									onChange={onChange}
									required
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridState">
								<Form.Label>State*</Form.Label>
								<Form.Control
									type="text"
									placeholder="State"
									name="statee"
									value={statee}
									onChange={onChange}
									required
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridZip">
								<Form.Label>Zip*</Form.Label>
								<Form.Control
									type="text"
									placeholder="Zip"
									name="zip"
									value={zip}
									onChange={onChange}
									required
								/>
							</Form.Group>
						</Form.Row>
						<small>* = required field</small>

						<div className="SubmitButtonBar">
							<Button
								id="dash-button3"
								className="btn btn-success"
								name="submit"
								type="submit"
							>
								Submit
							</Button>

							<div className="OtherButtons">
								<Link className="OtherButtons" to="/dashboard">
									<Button id="dash-button3" variant="outline-danger">
										Go Back
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</Form>
			</div>
		</Fragment>
	);
};

ProfileForm.propTypes = {
	createProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
	ProfileForm
);
