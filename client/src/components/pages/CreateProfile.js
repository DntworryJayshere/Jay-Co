import React, { Component } from 'react';
import ProfileForm from './../profile-form/ProfileForm';

class CreateProfile extends Component {
	render() {
		return (
			<>
				<div className="text-center align-self-center topping">
					<h2>Create Profile</h2>
				</div>

				<ProfileForm />
			</>
		);
	}
}

export default CreateProfile;
