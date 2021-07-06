import React, { Component } from "react";
import activeFace from "./assets/images/adjutant_active.gif";
import restingFace from "./assets/images/adjutant_resting.gif";
import "./assets/css/face.css";

export function Face(props) {
	if (props.active == true) {
		return <img src={activeFace} className="face row" alt="logo" />;
	} else {
		return <img src={restingFace} className="face row" alt="logo" />;
	}
}
