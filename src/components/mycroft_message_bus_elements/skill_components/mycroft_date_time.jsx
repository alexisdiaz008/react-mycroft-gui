import React, { Component } from "react";
import { ContentElement } from "../core_components/utils";

const SanitizedMonth = (props) => {
	let [month, day] = [
		props.month_string,
		props.day_string,
	]

	return (
		( month && 
			day && 
			day.length > 0 && 
			month.includes(day)
		) ? month.replace(` ${day}`, '') :
			month
	)
}

const HumanizedDateTime = (props, duration) => {
	const [month, day, year] = [
		SanitizedMonth(props),
		props.day_string,
		props.year_string
	]

	let humanizedDateText = (
		month && day && year ? `${SanitizedMonth(props)}, ${day}, ${year}` :
		month && day ? `${SanitizedMonth(props)}, ${day}` :
		month ? SanitizedMonth(props) :
		null
	)
	
	return (
		(humanizedDateText) ? 
		<div className="row">
			<ContentElement
				elementType={"TextFrame"}
				id={"fullTimeString"}
				className={"col-12 h3"}
				text={humanizedDateText}
				duration={duration}
			/>
		</div> :
		null
	)
}

export function MycroftDateTime(props) {
	const skill_props = props.skillState;
	const duration = 7000

	return (
		<div className="v-aligned-container row text-center">
			<ContentElement
				elementType={"Overlay"}
				duration={duration}
			/>
			<div className="col-12">
				<ContentElement
					elementType={"TextFrame"}
					id={"timeString"}
					className={"col-12 h1"}
					text={skill_props.time_string}
					duration={duration}
				/>
				<ContentElement
					elementType={"TextFrame"}
					id={"dateString"}
					className={"col-12 h4"}
					text={skill_props.date_string}
					duration={duration}
				/>
				<ContentElement
					elementType={"TextFrame"}
					id={"weekDayString"}
					className={"col-12 h2"}
					text={skill_props.weekday_string}
					duration={duration}
				/>
				{HumanizedDateTime(skill_props, duration)}
			</div>
		</div>
	);
}
