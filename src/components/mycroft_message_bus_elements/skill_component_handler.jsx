import React, { Component } from 'react';
import './default.scss'
import GuiExamplesAiix from './skill_components/gui_examples_aiix'
// import MycroftDateTime from './skill_components/mycroft_date_time'

export default class SkillComponentHandler extends Component {
	constructor(props) {
		super(props)
	}

	returnActiveSkillComponent() {
		const activeSkill = this.props.activeSkill
		const skillState = this.props.skillState
	
		switch (activeSkill) {
  		case "gui-examples.aiix":
  			return(
  				<GuiExamplesAiix
  					skillState = {skillState}
  				/>
				)
		  case "mycroft-date-time.mycroftai":
		  	return(
		  		<MycroftDateTime
		  			skillState = {skillState}
		  		/>
	  		)
		  default:
	      console.log("Unhandled component for: " + activeSkill)
	      break
		}
	}

	render() {
		// console.log(this.props)
		return (
			<div className="skill-container">
				{this.returnActiveSkillComponent()}
			</div>
		)
	}
}