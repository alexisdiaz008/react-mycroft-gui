import React, { Component } from 'react';
import restingFace from '../assets/black-hole.gif';
import './face.css';

export default class Face extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			resting:true
		}
		// this.handleFullscreen.bind(this)
	}
	// put this in a button component and pass through prop
	// handleFullscreen() {
	// }

	render() {
		return (
			<img src={restingFace} className="face" alt="logo" />
		);
	}
}