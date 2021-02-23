import React, { Component } from 'react';

class Landing extends Component {
	render() {
		return (
			<div className="outerContainer splashOuterContainer">
				<div className="container">
					<div className="row justify-content-center position-relative">
						<div className="col-lg-6 text-center align-self-center topping">
							<h2 className="splashHeading text-uppercase text-white text-left">
								Jay&Co Scheduling App
							</h2>
							<br />
							<p className="text-white splashText-left">
								The Jay&Co Custom Scheduling App provides enterprise level
								scheduling from the comfort and convenience of your own home.
								One application works for all service industries, including
								councelers, barbers, detailers, and doctors!
							</p>
						</div>
						<div className="col text-center topping">
							<div className="box">
								<div className="splashPic1"></div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<div className="container ">
					<div className="row justify-content-center splash-border position-relative">
						<div className="col topping">
							<div className="box">
								<div className="splashPic2"></div>
							</div>
						</div>
						<div className="col-lg-6 align-self-center text-center topping">
							<h2 className="splashHeading text-uppercase text-white text-left">
								Jay&Co Scheduling App Plus
							</h2>
							<br />
							<p className="text-white splashText-left">
								The Jay&Co Custom Scheduling App Plus provides the same
								enterprise level scheduling as the standard application with the
								added functionality of detailed scheduling analysis so that you
								can more effeciently manange your time.
							</p>
						</div>
					</div>
				</div>
				<br />
				<div className="container">
					<div className="row justify-content-center splash-border position-relative">
						<div className="col-lg-6 text-center align-self-center topping">
							<h2 className="splashHeading text-uppercase text-white text-left">
								Jay&Co Scheduling App Support Plus
							</h2>
							<br />
							<p className="text-white splashText-left">
								The Jay&Co Custom Scheduling App Support Plus provides the same
								functionality as the subservant tier with the added 24 hour
								scheduling support that your small business so desperatly needs.
								Dont worry about answering phones - we'll take care of it!
							</p>
						</div>
						<div className="col text-center topping">
							<div className="box">
								<div className="splashPic3"></div>
							</div>
						</div>
					</div>
				</div>
				<br />
				<div className="container">
					<div className="row justify-content-center splash-border position-relative">
						<div className="col topping">
							<div className="box">
								<div className="splashPic4"></div>
							</div>
						</div>
						<div className="col-lg-6 align-self-center text-center topping">
							<h2 className="splashHeading text-uppercase text-white text-left">
								Jay&Co Scheduling App Plus Plus Plus
							</h2>
							<br />
							<p className="text-white splashText-left">
								You thought it wasnt possible to schedule like the Jay&Co Custom
								Scheduling App Plus Plus Plus can. Not only does this
								application schedule, but it also finds you jobs/clients that
								pay your business well above the market rate. Its going to blow
								your scheduling needs out of the water.
							</p>
						</div>
					</div>
				</div>
				<br />
			</div>
		);
	}
}
export default Landing;
