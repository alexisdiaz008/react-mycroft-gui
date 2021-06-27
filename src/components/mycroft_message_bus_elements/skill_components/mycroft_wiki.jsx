import React, { Component, useEffect, useCallback } from "react";
import { ContentElement } from "../core_components/utils";

export function MycroftWiki(props) {
	const skill_props = props.skillState;
	const component_name = props.componentName;
	switch (component_name) {
		case "WikipediaDelegate":
			return (
				<div>
					<ContentElement
						elementType={"MediaFrame"}
						id={"imgLink"}
						mediaString={skill_props.imgLink}
						duration={15000}
					/>
					<ContentElement
						elementType={"TextFrame"}
						id={"summary"}
						className={"h4 text-left px-3"}
						text={skill_props.summary}
						duration={15000}
					/>
				</div>
			);
		default:
			return null;
			console.log("Unhandled component for: " + component_name);
			break;
	}
}
