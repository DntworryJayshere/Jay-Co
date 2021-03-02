import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';

const ProfileItem = ({
	profile: {
		user: { _id, name, lastName, email },
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
			<Link to={`/profile/${_id}`}>
				<div className="contextBodyProfile">
					Full Name: {name} {lastName}
				</div>
			</Link>
			<div className="contextBodyProfile">Email: {email}</div>
			<div className="contextBodyProfile">
				Date of Birth:{' '}
				<span>
					<Moment format="MMM-D-YYYY">{moment.utc(dob)}</Moment>
				</span>
			</div>
			<div className="contextBodyProfile">
				Phone: <span>{phone}</span>
			</div>
			<div className="contextBodyProfile">
				Address1: <span>{address1}</span>
			</div>
			<div className="contextBodyProfile">
				Address2: <span>{address2}</span>
			</div>
			<div className="contextBodyProfile">
				City: <span>{city}</span>
			</div>
			<div className="contextBodyProfile">
				State: <span>{statee}</span>
			</div>
			<div className="contextBodyProfile">
				Zip: <span>{zip}</span>
			</div>
		</div>
	);
};

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileItem;
