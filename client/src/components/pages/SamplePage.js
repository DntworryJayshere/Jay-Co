import React, { Fragment } from 'react';
import Footer from './../layout/Footer';

function SamplePage() {
	return (
		<Fragment>
			<div className="outerContainer splashOuterContainer">
				<div className="container">
					<div className="row justify-content-center position-relative">
						<div className="col-lg-6 text-center align-self-center topping">
							<h2 className="splashHeading text-uppercase text-white text-left">
								Sample Page
							</h2>
							<br />
							<p className="text-white splashText-left">
								This is a sample page. We are working hard to complete this
								application!
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
						<div className="col topping">
							<div className="box">
								<div className="splashPicSample"></div>
							</div>
						</div>
						<div className="col-lg-6 align-self-center text-center topping">
							<h2 className="splashHeading text-uppercase text-white text-left">
								Sample Page
							</h2>
							<br />
							<p className="text-white splashText-left">
								This is a sample page. We are working hard to complete this
								application!
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
export default SamplePage;
