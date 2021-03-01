import React, { Component } from 'react';
import ProfileForm from './../profile-form/ProfileForm';

class EditProfile extends Component {
	render() {
		return (
			<>
				<div className="text-center align-self-center topping">
					<h2>Edit Profile</h2>
				</div>

				<ProfileForm />
			</>
		);
	}
}

export default EditProfile;
