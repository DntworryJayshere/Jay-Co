import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItemAdmin from './ProfileItemAdmin';
import { getProfiles } from '../../actions/profile';
import CardColumns from 'react-bootstrap/CardColumns';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
	useEffect(() => {
		getProfiles();
	}, [getProfiles]);

	return (
		<Fragment>
			{loading ? (
				<Spinner />
			) : (
				<Fragment>
					<CardColumns>
						{profiles.length > 0 ? (
							profiles.map((profile) => (
								<ProfileItemAdmin key={profile._id} profile={profile} />
							))
						) : (
							<h4>No profiles found...</h4>
						)}
					</CardColumns>
					<br />
				</Fragment>
			)}
		</Fragment>
	);
};

Profiles.propTypes = {
	getProfiles: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
