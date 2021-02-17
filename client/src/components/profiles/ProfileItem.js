import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileItem = ({
	profile: {
		user: { _id, name },
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
		<Fragment>
			<p>
				dob{' '}
				<span>
					<Moment format="MMM-D-YYYY">{moment.utc(dob)}</Moment>
				</span>
			</p>
			<p>
				phone <span>{phone}</span>
			</p>
			<p>
				address1 <span>{address1}</span>
			</p>
			<p>
				address2 <span>{address2}</span>
			</p>
			<p>
				city <span>{city}</span>
			</p>
			<p>
				state <span>{statee}</span>
			</p>
			<p>
				zip <span>{zip}</span>
			</p>
		</Fragment>
	);
};

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileItem;
