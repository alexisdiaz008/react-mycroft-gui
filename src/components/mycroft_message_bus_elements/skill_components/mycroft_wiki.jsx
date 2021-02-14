import React, { Component, useEffect, useCallback} from 'react';
import MediaFrame from '../core_components/utils'
import { TextFrame } from '../core_components/utils'

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
							id={"imgLink"}
							mediaString={skill_props.imgLink}
						/>
						<TextFrame
							id={"summary"}
							className={"h4 text-left px-3"}
							text={skill_props.summary}
						/>
					</div>
				)
		  default:
		  	return (null)
	      console.log("Unhandled component for: " + component_name)
	      break
		}
  }
}