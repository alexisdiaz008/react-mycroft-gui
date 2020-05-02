import React, { Component } from 'react';
import SystemTextFrame from '../core_components/system_text_frame'
import SystemImageFrame from '../core_components/system_image_frame'

export default class GuiExamplesAiix extends React.Component {
	constructor(props) {
		super(props)
	}

	returnComponent() {
  	const skill_props = this.props.skillState
  	const component_focus = skill_props['component_focus']
		const component_name = skill_props['components'][component_focus]
		console.log(skill_props)
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

  render() {
    return (
	  	<div>
	  		{this.returnComponent()}
	  	</div>
  	)
  }
}