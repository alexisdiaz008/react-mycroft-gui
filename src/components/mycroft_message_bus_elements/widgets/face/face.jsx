import React, { Component } from "react";
import activeFace from "./assets/images/adjutant_active.gif";
import restingFace from "./assets/images/adjutant_resting.gif";
import "./assets/css/face.css";

export function Face(props) {
	let faceState =
	(props.active == true) ? activeFace : restingFace;

	return <img src={faceState} className="face row" alt="logo" />;
}
