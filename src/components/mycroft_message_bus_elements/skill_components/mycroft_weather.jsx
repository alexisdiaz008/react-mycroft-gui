import React, { Component, useEffect, useCallback} from 'react';
import MediaFrame from '../core_components/utils'
import { TextFrame } from '../core_components/utils'

export default class MycroftWeather extends React.Component {

	constructor(props) {
		super(props)
	}

  render() {
  	const skill_props = this.props.skillState
		const component_name = this.props.componentName

		switch (component_name) {
			case "weather":
				return (
					<div className="col-12">
						<TextFrame
							id={"current"}
							className={"h4 px-3"}
							text={skill_props.current}
						/>
						<TextFrame
							id={"condition"}
							className={"h4 px-3"}
							text={skill_props.condition}
						/>
					</div>
				)
			case "highlow":
				// return (
				// 	<div>
				// 		<TextFrame
				// 			id={"max"}
				// 			className={"h4 text-left px-3"}
				// 			text={skill_props.max}
				// 		/>
				// 	</div>
				// )
		  default:
		  	return (null)
	      console.log("Unhandled component for: " + component_name)
	      break
		}
  }
}