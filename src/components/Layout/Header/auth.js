import React from 'react';
import Signout from '../../Auth/Signout';

function AuthHeader() {
	return (
		<>
			<h1>Authenticated Header</h1>
			<Signout />
		</>
	)
}

export default AuthHeader;
