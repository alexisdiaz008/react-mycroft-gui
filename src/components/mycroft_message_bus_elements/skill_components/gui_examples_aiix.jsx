import React, { Component } from 'react';
// import SystemTextFrame from '../core_components/system_text_frame'

function SystemImageFrame(props) {
	// console.log(props)
	return (
		<div>
			<h3>{props.title}</h3>
			<img src={props.image}></img>
			<h5>{props.caption}</h5>
		</div>
	)
}

function SystemTextFrame(props) {
	console.log(props)
	return (
		<h5>{props.text}</h5>
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
					<SystemTextFrame
						text={(skill_props['text'] || null )}
					/>
				)
			case "SYSTEM_ImageFrame":
				return (
					<SystemImageFrame
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