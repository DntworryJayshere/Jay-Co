import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ProfileItemAdmin = ({
	profile: {
		user: { name, lastName, email },
		phone,
		address1,
		address2,
		city,
		statee,
		zip,
	},
}) => {
	return (
		<Card>
			<Card.Header>
				Name: {name} {lastName}
			</Card.Header>
			<ListGroup className="list-group-flush">
				<ListGroup.Item>Email: {email}</ListGroup.Item>
				<ListGroup.Item>
					Phone: <span>{phone}</span>
				</ListGroup.Item>
				<ListGroup.Item>
					Address1: <span>{address1}</span>
				</ListGroup.Item>
				<ListGroup.Item>
					Address2: <span>{address2}</span>
				</ListGroup.Item>
				<ListGroup.Item>
					City: <span>{city}</span>
				</ListGroup.Item>
				<ListGroup.Item>
					State: <span>{statee}</span>
				</ListGroup.Item>
				<ListGroup.Item>
					Zip: <span>{zip}</span>
				</ListGroup.Item>
			</ListGroup>
		</Card>
	);
};

ProfileItemAdmin.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileItemAdmin;
