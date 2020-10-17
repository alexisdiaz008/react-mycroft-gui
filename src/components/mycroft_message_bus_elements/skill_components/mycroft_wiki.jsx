import React, { Component, useEffect, useCallback} from 'react';
import MediaFrame from '../core_components/media_frame'

export default class MycroftWiki extends React.Component {

	constructor(props) {
		super(props)
	}

  render() {
  	const skill_props = this.props.skillState
		const component_name = this.props.componentName
		
		switch (component_name) {
			case "WikipediaDelegate":
				return (
					<div>
						<MediaFrame
							mediaString={skill_props.imgLink}
						/>
						<h5>{skill_props.summary}</h5>
					</div>
				)
		  default:
	      console.log("Unhandled component for: " + component_name)
	      break
		}
  }
}