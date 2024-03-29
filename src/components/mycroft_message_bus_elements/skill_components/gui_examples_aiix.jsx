import React, { Component } from "react";
import { ContentElement } from "../core_components/utils";
import { handleFade } from "../utils/effects";

export function GuiExamplesAiix(props) {
	const skill_props = props.skillState;
	const component_name = props.componentName;

	switch (component_name) {
		case "SYSTEM_TextFrame":
			return (
				<div className="v-aligned-container row text-center">
					<ContentElement
						elementType="TextFrame"
						id={"text"}
						className="col h5"
						text={skill_props["text"] || null}
						duration={2000}
					/>
				</div>
			);
		case "SYSTEM_ImageFrame":
			return (
				<div className="v-aligned-container row text-center">
					<ContentElement
						elementType="TextFrame"
						id="title"
						className="col-12 h2"
						text={skill_props["title"] || null}
						duration={2000}
					/>
					<ContentElement
						elementType="ImageFrame"
						id={"image"}
						className="col-12"
						src={skill_props["image"] || null}
						duration={2000}
					/>
					<ContentElement
						elementType="TextFrame"
						className="col-12 h4"
						text={skill_props["caption"] || null}
						duration={2000}
					/>
				</div>
			);
		default:
			console.log("Unhandled component for: " + component_name);
			return null;
	}
}
