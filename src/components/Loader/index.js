import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './animationData.json';
import './Loader.css';

function Loader() { 
    const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData.default,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
    };
 
    return (
		<div className="loader">
			<Lottie options={defaultOptions} />
		</div>
		// <div className="loader" />
    )
}

export default Loader;
