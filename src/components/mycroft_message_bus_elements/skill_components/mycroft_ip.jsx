import React, { Component } from "react";
import { ContentElement } from "../core_components/utils";

export function MycroftIp(props) {
	const skill_props = props.skillState;

	return (
		<div className="col-12 text-center">
			<ContentElement
				elementType={"TextFrame"}
				id={"ipString"}
				className={"h1"}
				text={skill_props.ip}
				display={skill_props.display}
				duration={15000}
			/>
		</div>
	);
}
