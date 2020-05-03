import React, { Component } from 'react';

export default class MycroftWiki extends React.Component {
	constructor(props) {
		super(props)
	}

	returnComponent() {
  	const skill_props = this.props.skillState
		const component_name = this.props.componentName
		switch (component_name) {
			case "WikipediaDelegate":
				return (
					<div>
						<img src={skill_props.imgLink}></img>
						<h5>{skill_props.summary}</h5>
					</div>
				)
		  default:
	      console.log("Unhandled component for: " + component_name)
	      break
		}
	}

  render() {
    return (
	  	<div>
	  		{this.returnComponent()}
	  	</div>
  	)
  }
}