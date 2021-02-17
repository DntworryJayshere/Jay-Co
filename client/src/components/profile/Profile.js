import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from '../profiles/ProfileItem';
import { getProfileById } from '../../actions/profile';

const Profile = ({
	getProfileById,
	profile: { profile, loading },
	auth,
	match,
}) => {
	useEffect(() => {
		getProfileById(match.params.id);
	}, [getProfileById, match.params.id]);

	return loading || profile === null ? (
		<Spinner />
	) : (
		<Fragment>
			{auth.isAuthenticated &&
				auth.loading === false &&
				auth.user._id === profile.user._id && (
					<Link to="/edit-profile" className="btn btn-dark">
						Edit Profile
					</Link>
				)}
			<ProfileItem profile={profile} />
		</Fragment>
	);
};

Profile.propTypes = {
	getProfileById: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
