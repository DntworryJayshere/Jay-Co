import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteBookingAdmin } from '../../actions/booking';
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const BookingItem = ({
	deleteBookingAdmin,
	booking: {
		_id,
		appointmentDate,
		appointmentTime,
		appointmentDuration,
		text,
		name,
		lastName,
	},
}) => (
	<Card>
		<Card.Header>
			Name: {name} {lastName}
		</Card.Header>
		<ListGroup className="list-group-flush">
			<ListGroup.Item>
				Appointment Date:{' '}
				<span>
					<Moment format="MMM-D-YYYY">{moment.utc(appointmentDate)}</Moment>
				</span>
			</ListGroup.Item>
			<ListGroup.Item>
				Appointment Time: <span> {appointmentTime}</span>
			</ListGroup.Item>
			<ListGroup.Item>
				Appointment Duration: <span> {appointmentDuration}</span>
			</ListGroup.Item>
			<ListGroup.Item>
				Appointment Comments: <span> {text}</span>
			</ListGroup.Item>
		</ListGroup>
		<Button variant="danger" onClick={() => deleteBookingAdmin(_id)}>
			<i className="fas fa-trash" /> Delete Booking{' '}
		</Button>
	</Card>
);

BookingItem.propTypes = {
	booking: PropTypes.object.isRequired,
	deleteBookingAdmin: PropTypes.func.isRequired,
};

export default connect(null, { deleteBookingAdmin })(BookingItem);
