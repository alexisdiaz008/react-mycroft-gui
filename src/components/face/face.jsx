import React, { Component } from 'react';
import restingFace from './assets/images/ai.gif';
import './assets/css/face.css';

export default class Face extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			resting:true
		}
	}

	render() {
		return (
			<img
				src={restingFace}
				className="face row"
				alt="logo"
			/>
		);
	}
}