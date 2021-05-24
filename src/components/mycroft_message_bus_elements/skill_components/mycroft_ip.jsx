import React, { Component } from 'react';
import { TextFrame } from '../core_components/utils'

export default class MycroftIp extends React.Component {
	constructor(props) {
		super(props)
	}

  render() {
  	const skill_props = this.props.skillState

    return (
    	<div className="col-12 text-center">
	    	<TextFrame
					id={"ipString"}
					className={"h1"}
					text={skill_props.ip}
				/>
			</div>
  	)
  }
}