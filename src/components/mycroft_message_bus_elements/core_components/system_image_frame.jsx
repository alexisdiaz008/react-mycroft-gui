import React, { Component } from 'react';

export default function SystemImageFrame(props) {
	// console.log(props)
	return (
		<div>
			<h3>{props.title}</h3>
			<img src={props.image}></img>
			<h5>{props.caption}</h5>
		</div>
	)
}