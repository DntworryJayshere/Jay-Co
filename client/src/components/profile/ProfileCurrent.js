import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from '../profiles/ProfileItem';
import { getCurrentProfile } from '../../actions/profile';

const Profile = ({ getCurrentProfile, profile: { profile }, auth }) => {
	useEffect(() => {
		getCurrentProfile();
	}, []);

	return (
		<Fragment>
			{profile === null ? (
				<Spinner />
			) : (
				<Fragment>
					{auth.isAuthenticated &&
						auth.loading === false &&
						auth.user._id === profile.user._id && (
							<ProfileItem profile={profile} />
						)}
				</Fragment>
			)}
		</Fragment>
	);
};

Profile.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
