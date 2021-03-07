import React, { Component, useEffect, useCallback} from 'react';
import MediaFrame from '../../core_components/utils'
import { TextFrame } from '../../core_components/utils'
import sunny from './assets/images/sunny.gif';
import partlyCloudy from './assets/images/partly_cloudy.gif';
import cloudy from './assets/images/cloudy.gif';
import rain from './assets/images/rain.gif';
import storm from './assets/images/storm.gif';
import snow from './assets/images/snow.gif';
import fog from './assets/images/fog.gif';

export default class MycroftWeather extends React.Component {

	constructor(props) {
		super(props)
	}

  render() {
  	const skill_props = this.props.skillState
		const component_name = this.props.componentName
		const weather_animations = {0:sunny, 1:partlyCloudy, 2:cloudy, 3:rain, 4:rain, 5:storm, 6:snow, 7:fog}

		switch (component_name) {
			case "weather":
				return (
					<div className="col-12">
						<MediaFrame
							id={"weatherImage"}
							mediaString={weather_animations[skill_props.weathercode]}
						/>
						<TextFrame
							id={"current"}
							className={"h1 px-3"}
							text={`${skill_props.current}°`}
						/>
						<TextFrame
							id={"condition"}
							className={"h4 px-3"}
							text={skill_props.condition}
						/>
						<TextFrame
							id={"location"}
							className={"h4 px-3"}
							text={skill_props.location}
						/>
					</div>
				)
			case "highlow":
				return (
					<div className="col-12">
						<TextFrame
							id={"maxMin"}
							className={"h1 px-3"}
							text={`${skill_props.max}° / ${skill_props.min}°`}
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