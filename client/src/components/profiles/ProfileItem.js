import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';

const ProfileItem = ({
	profile: {
		user: { _id },
		dob,
		phone,
		address1,
		address2,
		city,
		statee,
		zip,
	},
}) => {
	return (
		<div>
			<p>
				DOB{' '}
				<span>
					<Moment format="MMM-D-YYYY">{moment.utc(dob)}</Moment>
				</span>
			</p>
			<p>
				Phone: <span>{phone}</span>
			</p>
			<p>
				Address1: <span>{address1}</span>
			</p>
			<p>
				Address2: <span>{address2}</span>
			</p>
			<p>
				City: <span>{city}</span>
			</p>
			<p>
				State: <span>{statee}</span>
			</p>
			<p>
				Zip: <span>{zip}</span>
			</p>
			<Link to="/edit-profile">
				<Button variant="success">Edit Profile</Button>
			</Link>
		</div>
	);
};

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileItem;
