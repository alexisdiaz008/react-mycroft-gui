import React, { Component, useEffect, useCallback } from "react";
import { ContentElement } from "../../core_components/utils";
import sunny from "./assets/images/sunny.gif";
import partlyCloudy from "./assets/images/partly_cloudy.gif";
import cloudy from "./assets/images/cloudy.gif";
import rain from "./assets/images/rain.gif";
import storm from "./assets/images/storm.gif";
import snow from "./assets/images/snow.gif";
import fog from "./assets/images/fog.gif";

export function MycroftWeather(props) {
	const basicWeatherDisplay = (props) => {
		const weather_animations = {
			0: sunny,
			1: partlyCloudy,
			2: cloudy,
			3: rain,
			4: rain,
			5: storm,
			6: snow,
			7: fog,
		};
		return (
			<div className="col-12">
				<ContentElement
					elementType="MediaFrame"
					id={"weatherImage"}
					mediaString={weather_animations[props.weatherCode]}
					display={skill_props.display}
					duration={10000}
				/>
				<ContentElement
					elementType="TextFrame"
					id={"current"}
					className={"h1 px-3"}
					text={`${props.currentTemperature}°`}
					display={skill_props.display}
					duration={10000}
				/>
				<ContentElement
					elementType="TextFrame"
					id={"maxMin"}
					className={"h2 px-3"}
					text={`${props.highTemperature}° / ${props.lowTemperature}°`}
					display={skill_props.display}
					duration={10000}
				/>
				<ContentElement
					elementType="TextFrame"
					id={"condition"}
					className={"h4 px-3"}
					text={props.condition}
					display={skill_props.display}
					duration={10000}
				/>
				<ContentElement
					elementType="TextFrame"
					id={"condition"}
					className={"h4 px-3"}
					text={`Humidity: ${props.humidity} %`}
					display={skill_props.display}
					duration={10000}
				/>
				<ContentElement
					elementType="TextFrame"
					id={"condition"}
					className={"h4 px-3"}
					text={`Wind: ${props.windSpeed} MPH`}
					display={skill_props.display}
					duration={10000}
				/>
				<ContentElement
					elementType="TextFrame"
					id={"location"}
					className={"h4 px-3"}
					text={props.weatherLocation}
					display={skill_props.display}
					duration={10000}
				/>
			</div>
		);
	};

	const skill_props = props.skillState;
	const component_name = props.componentName;

	switch (component_name) {
		case "weather":
			return basicWeatherDisplay(skill_props);
		case "highlow":
			return basicWeatherDisplay(skill_props);
		case "daily_scalable":
			return basicWeatherDisplay(skill_props);
		case "current_1_scalable":
			return basicWeatherDisplay(skill_props);
		case "current_2_scalable":
			return basicWeatherDisplay(skill_props);
		default:
			console.log("Unhandled component for: " + component_name);
			return null;
	}
}
