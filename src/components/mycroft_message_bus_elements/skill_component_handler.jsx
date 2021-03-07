import React, { Component } from 'react';
import './default.scss'
import GuiExamplesAiix from './skill_components/gui_examples_aiix'
import MycroftDateTime from './skill_components/mycroft_date_time'
import MycroftIp from './skill_components/mycroft_ip'
import MycroftWiki from './skill_components/mycroft_wiki'
import MycroftWeather from './skill_components/mycroft_weather/mycroft_weather'

export default class SkillComponentHandler extends Component {
	constructor(props) {
		super(props)
	}

	returnActiveSkillComponent() {
		const active_skill = this.props.activeSkill
		const skill_state = this.props.skillState
  	const component_focus = skill_state['component_focus']
		const component_name = skill_state['components'][component_focus]
		console.log(active_skill)
		console.log(skill_state)
		console.log(component_name)
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
		  case "mycroft-ip.mycroftai":
		  	return (
		  		<MycroftIp
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
  		case "mycroft-wiki.mycroftai":
  			return (
  				<MycroftWiki
		  			skillState = {skill_state}
		  			componentName = {component_name}
  				/>
				)
			case "mycroft-weather.mycroftai":
				return (
					<MycroftWeather
						skillState = {skill_state}
						componentName = {component_name}
					/>
				)
		  default:
		  	return (null)
	      console.log("Unhandled component for: " + active_skill)
	      break
		}
	}

	render() {
		return (
			<div className="skill-container row">
				{this.returnActiveSkillComponent()}
			</div>
		)
	}
}