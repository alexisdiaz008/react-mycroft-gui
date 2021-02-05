import React, { Component } from 'react';
import './default.scss'
import GuiExamplesAiix from './skill_components/GuiExamplesAiix'
import MycroftDateTime from './skill_components/MycroftDateTime'
import MycroftWiki from './skill_components/MycroftWiki'

export default class SkillComponentHandler extends Component {
	constructor(props) {
		super(props)
	}

	returnActiveSkillComponent() {
		const active_skill = this.props.activeSkill
		const skill_state = this.props.skillState
  	const component_focus = skill_state['component_focus']
		const component_name = skill_state['components'][component_focus]
		console.log(skill_state)
		switch (active_skill) {
  		case "gui-examples.aiix":
  			return (
  				<GuiExamplesAiix
  					skillState = {skill_state}
  					componentName = {component_name}
  				/>
				)
		  case "mycroft-date-time.mycroftai":
		  	return (
		  		<MycroftDateTime
		  			skillState = {skill_state}
		  			componentName = {component_name}
		  		/>
	  		)
  		case "mycroft-wiki.mycroftai":
  			return (
  				<MycroftWiki
		  			skillState = {skill_state}
		  			componentName = {component_name}
  				/>
				)
		  default:
	      console.log("Unhandled component for: " + active_skill)
	      break
		}
	}

	render() {
		return (
			<div className="skill-container row fade-in">
				{this.returnActiveSkillComponent()}
			</div>
		)
	}
}
