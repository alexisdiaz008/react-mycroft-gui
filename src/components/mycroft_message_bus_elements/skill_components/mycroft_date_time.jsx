import React, { Component } from "react";
import { ContentElement } from "../core_components/utils";

const sanitizedMonth = (props) => {
	let [month, day] = [
		props.month_string,
		props.day_string,
	]

	if (
		month && 
		day && 
		day.length > 0 && 
		month.includes(day)) {
		return month.replace(` ${day}`, '')
	} else {
		return month
	}
}

export function MycroftDateTime(props) {
	const skill_props = props.skillState;
	const duration = 7000
	
	const [month, day, year] = [
		sanitizedMonth(skill_props),
		skill_props.day_string,
		skill_props.year_string
	]

	return (
		<div className="v-aligned-container row text-center">
			<ContentElement
				elementType={"Overlay"}
				duration={duration}
			/>
			<div className="col-12">
				<ContentElement
					elementType={"TextFrame"}
					id={"dateString"}
					className={"col-12 h4"}
					text={skill_props.date_string}
					duration={duration}
				/>
				<ContentElement
					elementType={"TextFrame"}
					id={"timeString"}
					className={"col-12 h1"}
					text={skill_props.time_string}
					duration={duration}
				/>
				<ContentElement
					elementType={"TextFrame"}
					id={"timeString"}
					className={"col-12 h1"}
					text={skill_props.weekday_string}
					duration={duration}
				/>
				<div className="row">
					<ContentElement
						elementType={"TextFrame"}
						id={"timeString"}
						className={"col-12 h3"}
						text={`${month}, ${day}, ${year}`}
						duration={duration}
					/>
				</div>
			</div>
		</div>
	);
}
