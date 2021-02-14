import React, { Component } from 'react';
import { TextFrame } from '../core_components/utils'

export default class MycroftDateTime extends React.Component {
	constructor(props) {
		super(props)
	}

  render() {
  	const skill_props = this.props.skillState

    return (
    	<div className="col-12 text-center">
	    	<TextFrame
					id={"dateString"}
					className={"h4"}
					text={skill_props.date_string}
				/>
	    	<TextFrame
					id={"timeString"}
					className={"h1"}
					text={skill_props.time_string}
				/>
			</div>
  	)
  }
}