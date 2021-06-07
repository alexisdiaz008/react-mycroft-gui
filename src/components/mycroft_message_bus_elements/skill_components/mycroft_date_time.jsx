import React, { Component } from 'react';
import { ContentElement } from '../core_components/utils'

export function MycroftDateTime(props) {
	const skill_props = props.skillState

	return (
		<div className="col-12 text-center">
			<ContentElement
				elementType={"TextFrame"}
				id={"dateString"}
				className={"h4"}
				text={skill_props.date_string}
				duration={2000}
			/>
			<ContentElement
				elementType={"TextFrame"}
				id={"timeString"}
				className={"h1"}
				text={skill_props.time_string}
				duration={2000}
			/>
		</div>
	)
}