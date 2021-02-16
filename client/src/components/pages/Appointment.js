import React, { Fragment, Component } from 'react';
import Fade from 'react-reveal/Fade';
import BookingForm from './../bookings/BookingForm';

class Appointment extends Component {
  render() {
    return (
      <>
        <Fade>
          <div className='container'>
            <div className='text-center' id='AppointmentBody'>
              <h1 className='py-4'>Schedule Appointment</h1>
            </div>

            <div className='Appointment-body'>
              <Fragment>
                <BookingForm />
              </Fragment>
            </div>
          </div>
        </Fade>
      </>
    );
  }
}

export default Appointment;
