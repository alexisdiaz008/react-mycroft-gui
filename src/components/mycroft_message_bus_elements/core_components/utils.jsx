import React, { Component } from 'react';

export const ImageFrame = (props) => {
	return (
		<div>
			<TextFrame
				className="h2"
				text={props.title}
			/>
			<img src={props.image}></img>
			<TextFrame
				className="h4"
				text={props.caption}
			/>
		</div>
	)
}

export const TextFrame = (props) => {
	return (
		<p 
			className={props.className}>
			{props.text}
		</p>
	)
}
