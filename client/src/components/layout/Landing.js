import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Landing extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col>1 of 2</Col>
					<Col>Booking Better Together</Col>
				</Row>
				<Row>
					<Col>
						We design, build, and ship customized scheduling solutions for your
						business needs.
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Landing;
