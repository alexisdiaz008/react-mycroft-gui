import React, { Component } from 'react';
import { TextFrame } from '../core_components/utils'
import { ImageFrame } from '../core_components/utils'
import { handleFade } from '../utils/effects'

export default class GuiExamplesAiix extends React.Component {
	constructor(props) {
		super(props)
	} 

  render() {
  	const skill_props = this.props.skillState
		const component_name = this.props.componentName
		{setTimeout(() => {handleFade('.skill-container', 8000)}, 1000)}

		switch (component_name) {
			case "SYSTEM_TextFrame":
				return (
					<TextFrame
						className="col h5"
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