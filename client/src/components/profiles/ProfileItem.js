import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
	profile: { phone, address1, address2, city, statee, zip },
}) => {
	return (
		<Fragment>
			<div className="contextBodyProfile">
				Phone: <span>{phone}</span>
				<Link to="/edit-profile" className="editOption">
					<p>Change Phone</p>
				</Link>
			</div>
			<div className="contextBodyProfile">
				Address1: <span>{address1}</span>
				<Link to="/edit-profile" className="editOption">
					<p>Change Address1</p>
				</Link>
			</div>
			<div className="contextBodyProfile">
				Address2: <span>{address2}</span>
				<Link to="/edit-profile" className="editOption">
					<p>Change Address2</p>
				</Link>
			</div>
			<div className="contextBodyProfile">
				City: <span>{city}</span>
				<Link to="/edit-profile" className="editOption">
					<p>Change City</p>
				</Link>
			</div>
			<div className="contextBodyProfile">
				State: <span>{statee}</span>
				<Link to="/edit-profile" className="editOption">
					<p>Change State</p>
				</Link>
			</div>
			<div className="contextBodyProfile">
				Zip: <span>{zip}</span>
				<Link to="/edit-profile" className="editOption">
					<p>Change Zip</p>
				</Link>
			</div>
		</Fragment>
	);
};

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileItem;
