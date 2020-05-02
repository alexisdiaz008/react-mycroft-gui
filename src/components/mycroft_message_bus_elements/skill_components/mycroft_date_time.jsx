import React, { Component } from 'react';

class MycroftDateTime extends React.Component {
	constructor(props) {
		super(props)
	}

  render() {
    return (
	  	<div>
	    	{console.log("the time is "+ this.props.skillState['time_string'])}
	  	</div>
  	)
  }
}