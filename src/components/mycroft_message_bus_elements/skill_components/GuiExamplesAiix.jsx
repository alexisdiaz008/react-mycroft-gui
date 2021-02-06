import React, { Component } from 'react';
// import SystemTextFrame from '../core_components/system_text_frame'

function ImageFrame(props) {
	// console.log(props)
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

function TextFrame(props) {
	return (
		<p className={props.className}>
			{props.text}
		</p>
	)
}

export default class GuiExamplesAiix extends React.Component {
	constructor(props) {
		super(props)
	} 

  render() {
  	const skill_props = this.props.skillState
		const component_name = this.props.componentName
		switch (component_name) {
			case "SYSTEM_TextFrame":
				return (
					<TextFrame
						className="h5"
						text={(skill_props['text'] || null )}
					/>
				)
			case "SYSTEM_ImageFrame":
				return (
					<ImageFrame
						title={(skill_props['title'] || null )}
						image={(skill_props['image'] || null )}
						caption={(skill_props['caption'] || null )}
					/>
				)
		  default:
	      console.log("Unhandled component for: " + component_name)
	      break
		}
  }
}