exports.registerEmailParams = (email, token) => {
	return {
		Source: process.env.EMAIL_FROM,
		Destination: {
			ToAddresses: [email],
		},
		ReplyToAddresses: [process.env.EMAIL_FROM],
		Message: {
			Body: {
				Html: {
					Charset: 'UTF-8',
					Data: `
                        <html>
                            <h1>Vefiry your email address</h1>
                            <p>Please use the following link to complete your registration:</p>
                            <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
                        </html>
                    `,
				},
			},
			Subject: {
				Charset: 'UTF-8',
				Data: 'Complete your registration',
			},
		},
	};
};

// exports.forgotPasswordEmailParams = (email, token) => {
// 	return {
// 		Source: process.env.EMAIL_FROM,
// 		Destination: {
// 			ToAddresses: [email],
// 		},
// 		ReplyToAddresses: [process.env.EMAIL_FROM],
// 		Message: {
// 			Body: {
// 				Html: {
// 					Charset: 'UTF-8',
// 					Data: `
//                         <html>
//                             <h1>Reset Password Link</h1>
//                             <p>Please use the following link to reset your password:</p>
//                             <p>${process.env.CLIENT_URL}/auth/password/reset/${token}</p>
//                         </html>
//                     `,
// 				},
// 			},
// 			Subject: {
// 				Charset: 'UTF-8',
// 				Data: 'Password reset link',
// 			},
// 		},
// 	};
// };

exports.bookingPublishedParams = (email, booking) => {
	return {
		Source: process.env.EMAIL_FROM,
		Destination: {
			ToAddresses: [email],
		},
		ReplyToAddresses: [process.env.EMAIL_FROM],
		Message: {
			Body: {
				Html: {
					Charset: 'UTF-8',
					Data: `
                        <html>
                            <h1>New booking created</h1>
                            <p>	
								A new booking has been created for ${booking.name} ${' '} ${booking.lastName}.
							</p>
                            <br />
							<p>
								<b> Date: ${booking.appointmentDate}</b>
							</p>
							<p>
								<b> Time: ${booking.appointmentTime}</b> 
							</p>
							<p>
								<b> Time: ${booking.appointmentDuration}</b> 
							</p>
							<p>
								<b> Comments: ${booking.text}</b>
							</p>
							<br />
                            <p>Do not wish to receive notifications?</p>
                            <p>Turn off notification by going to your <b>dashboard</b> > <b>edit profile</b> and <b>uncheck the notifiy upcoming appointments box</b></p>
                            <p>${process.env.CLIENT_URL}/edit-profile</p>
                        </html>
                    `,
				},
			},
			Subject: {
				Charset: 'UTF-8',
				Data: 'New booking created',
			},
		},
	};
};
