import React, { Component } from 'react';
import './default.scss'
import GuiExamplesAiix from './skill_components/gui_examples_aiix'
import MycroftDateTime from './skill_components/mycroft_date_time'
import MycroftWiki from './skill_components/mycroft_wiki'

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

	handleFade(element, duration) {
		setTimeout(() => {
			const element = document.querySelector('.skill-container')
			element.classList.remove("fade-in")
			element.classList.add("fade-out")
		}, duration)
	}

	render() {
		// console.log(this.props)
		{this.handleFade('.skill-container', 8000)}
		return (
			<div className="skill-container fade-in">
				{this.returnActiveSkillComponent()}
			</div>
		)
	}
}