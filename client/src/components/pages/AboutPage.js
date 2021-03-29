import React, { Fragment } from 'react';
import Footer from './../layout/Footer';

function AboutPage() {
	return (
		<Fragment>
			<div className="outerContainer splashOuterContainer">
				<div className="container">
					<div className="row justify-content-center position-relative">
						<div className="col-lg-6 text-center align-self-center topping">
							<h2 className="splashHeading text-uppercase text-white text-left">
								What is jayco.cloud?
							</h2>
							<br />
							<p className="text-white splashText-left">
								Simply put jayco.cloud is a custom, full-stack, and deployed
								scheduling application. It allows users to create an account,
								profile, and book appointments.
							</p>
						</div>
						<div className="col text-center topping">
							<div className="box">
								<div className="splashPicSample"></div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<div className="container ">
					<div className="row justify-content-center splash-border position-relative">
						<div className="col-lg-12 align-self-center text-center topping">
							<h2 className="splashHeading text-uppercase text-white text-center">
								How it Works?
							</h2>
							<br />
							<p className="text-white splashText-left">
								jayco.cloud originated as a full-stack MongoDB Atlas, Express,
								React, and Node.js (MERN) application. The booking functionality
								is integrated with AWS Simple Email Service(SES)**. Redux is
								utilized to manage state between components, and React-Bootstrap
								provides layout/component structure and styling. PM2 is the
								production daemon process manager. Nginx functions as the web
								server and reverse proxy. The application is running on an
								Ubuntu Server Application Machine Image(AMI) on an Elastic
								Compute Cloud(EC2) instance. The Domain was purchased through
								namecheap, and the SSL Cert obtained through letsencrypt. You
								can review the publicly available code through the Github Repo.
							</p>
						</div>
					</div>
				</div>
				<br />
				<div className="container ">
					<div className="row justify-content-center splash-border position-relative">
						<div className="col topping">
							<div className="box">
								<div className="splashPicSample"></div>
							</div>
						</div>
						<div className="col-lg-6 align-self-center text-center topping">
							<h2 className="splashHeading text-uppercase text-white text-left">
								Want to dive deeper?
							</h2>
							<br />
							<p className="text-white splashText-left">
								Inorder to view the full functionality/routing of the
								application please feel free to use the below User login
								information.
							</p>
							<p className="text-white splashText-left">
								User: email: scalableapp.user@gmail.com | pw:123456
							</p>
							<p className="text-white splashText-left">
								PLEASE DO NOT delete this account/profile as it will ruin the
								experience for other, and only delete bookings that YOU created
								previously. Thanks for looking!
							</p>
							<p className="text-white splashText-left">
								**for approved, non-production email addresses.
							</p>
						</div>
					</div>
				</div>
				<br />
			</div>
			<Footer />
		</Fragment>
	);
}
export default AboutPage;
