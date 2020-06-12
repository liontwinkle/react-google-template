import React from 'react';

function Home() {
	return (
		<>
			<div className="mail-group">
				<div className="alert alert-secondary m-3" role="alert">
					<strong>Event: </strong>
					<br/><strong>Instance: </strong>
					<br/><strong>Team: </strong>
					<br/><strong>User: </strong>
				</div>
			</div>
			<div className="mail-content"></div>
		</>
	)
}

export default Home;
