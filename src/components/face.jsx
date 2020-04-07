import React, { Component } from 'react';
import restingFace from '../assets/restingfaceplaceholder.gif';
import './face.css';

class Face extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			resting:true
		}
		this.handleFullscreen.bind(this)
	}
	// put this in a button component and pass through prop
	handleFullscreen() {
		console.log(this)
		if (e.requestFullscreen) {
		  e.requestFullscreen();
		} else if (e.mozRequestFullScreen) { /* Firefox */
		  e.mozRequestFullScreen();
		} else if (e.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
		  e.webkitRequestFullscreen();
		} else if (e.msRequestFullscreen) { /* IE/Edge */
		  e.msRequestFullscreen();
		}
	}

	render() {
		return (
			<img src={restingFace} className="face" alt="logo" />
		);
	}
}

export default Face;