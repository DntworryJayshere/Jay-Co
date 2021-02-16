import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Landing extends Component {
  render() {
    return (
      <>
        <div>Booking Better Together</div>
        <div>
          We design, build, and ship customized scheduling solutions for your
          business needs.
        </div>
        <Button
          id='landingButton'
          name='landing'
          variant='dark'
          type='submit'
          value='Submit'
        >
          Lets Start Scheduling
        </Button>
      </>
    );
  }
}

export default Landing;
