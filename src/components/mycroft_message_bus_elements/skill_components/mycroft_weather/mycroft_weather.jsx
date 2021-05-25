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

	basicWeatherDisplay(props) {
		const weather_animations = {0:sunny, 1:partlyCloudy, 2:cloudy, 3:rain, 4:rain, 5:storm, 6:snow, 7:fog}
		return (
			<div className="col-12">
				<ContentElement
					elementType="MediaFrame"
					id={"weatherImage"}
					mediaString={weather_animations[props.weathercode]}
				/>
				<ContentElement
					elementType="TextFrame"
					id={"current"}
					className={"h1 px-3"}
					text={`${props.current}°`}
				/>
				<ContentElement
					elementType="TextFrame"
					id={"maxMin"}
					className={"h2 px-3"}
					text={`${props.max}° / ${props.min}°`}
				/>
				<ContentElement
					elementType="TextFrame"
					id={"condition"}
					className={"h4 px-3"}
					text={props.condition}
				/>
				<ContentElement
					elementType="TextFrame"
					id={"location"}
					className={"h4 px-3"}
					text={props.location}
				/>
			</div>
		)
	}

  render() {
  	const skill_props = this.props.skillState
		const component_name = this.props.componentName

		switch (component_name) {
			case "weather":
				return (
					this.basicWeatherDisplay(skill_props)
				)
			case "highlow":
				return (
					this.basicWeatherDisplay(skill_props)
				)
		  default:
		  	return (null)
	      console.log("Unhandled component for: " + component_name)
	      break
		}
  }
}