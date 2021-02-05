import React, { Component } from 'react';
import SkillComponentHandler from './skill_component_handler'

export default class MycroftMessageBus extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			'ws.readyState':null,
			"mycroft.system.active_skills":null
		}
	}
	
	componentDidMount() {
		if (this.state['ws.readyState'] = (null || 3)) {
				this.connectMycroftGui()
		}
	}

	connectMycroftGui() {
		var ws = new WebSocket("ws://localhost:8181/core")
	  ws.onopen = (event) => {
	  	this.updateWebSocketReadyState(ws)
			this.announceConnection(ws)
		}
		this.connectToGui(ws)
		ws.onclose = () => {
			this.updateWebSocketReadyState(ws)
		}
	}

	updateWebSocketReadyState(web_socket) {
		this.setState({
				['ws.readyState']: web_socket.readyState
			}, ()=>{console.log(`mycroft core ready state: ${this.state['ws.readyState']}`)})
	}

  announceConnection(web_socket) {
	    // Announce to trigger send of "mycroft.gui.port" message with gui port
	    web_socket.send(
	        JSON.stringify(
	            {"type":"mycroft.gui.connected",
	             "data": {
	                "gui_id":"js_gui"
	             }
	            }
	        )
	    )
	}

	connectToGui(web_socket) {
		web_socket.onmessage = (event) => {
	    var msg = JSON.parse(event.data)
	    if (msg.type == "mycroft.gui.port") {
	    	console.log(`connecting to mycroft gui at ${msg.data['port']}`)
	    	var gui_ws = new WebSocket(`ws://localhost:${msg.data["port"]}/gui`)
		    this.handleGuiMessages(gui_ws)
	    }
	  }
	}

	handleGuiMessages(gui_ws) {
    gui_ws.onmessage = (event) => {
    	let gui_msg = JSON.parse(event.data)
    	// console.log(gui_msg)
    	// copy state to object to later reassign values, we should never alter state DIRECTLY, so we make an object representation instead
    	let component_namespace_state = Object.assign({}, this.state[gui_msg.namespace])
			switch (gui_msg.type) {
			  case "mycroft.session.list.insert":
		      // Insert a new and reset existing skill namespace under mycroft.system.active_skill in state
		      let skill_id = gui_msg.data[0]['skill_id']
		      return (
		      	this.setState({
							[gui_msg.namespace]: skill_id,
			      	[skill_id]: null
						})
		      )
			  case "mycroft.session.set": 
		      // Set all variables to the namespaces state
	      	let merged_namespace_state = Object.assign(component_namespace_state, gui_msg.data)
	      	return (
	      		this.setState({
	      			[gui_msg.namespace]: merged_namespace_state
	      		})
	      	)
			  case "mycroft.gui.list.insert":
		  		let filter_url = (page_url) => { return(page_url.substring(page_url.lastIndexOf('/')+1).replace('.qml', '')) }
		      // iterate through page_urls only adding the component name to the array
		      let page_list = gui_msg.data.map((i) => filter_url(i['url']))
		      // assign pages list and determine page and component to focus
		      component_namespace_state['components'] = page_list
		      component_namespace_state['component_focus'] = gui_msg.position
		      return (
		      	this.setState({
			      	[gui_msg.namespace]: component_namespace_state
			      })
		      )
			  case "mycroft.events.triggered":
		      // Used to switch page within currently active namespace if page focus event
		      if (gui_msg.event_name == "page_gained_focus") {
		      	component_namespace_state['component_focus'] = gui_msg.data['number']
			      return (
			      	this.setState({
			      		['mycroft.system.active_skills']: gui_msg.namespace,
				      	[gui_msg.namespace]: component_namespace_state
				      })
			      )
		      }
			  default:
		      // Log unhandled messages
		      // console.log("Unhandled message type: " + gui_msg.type)
		      break
			}
    }
	}

	render() {
		const active_skill = this.state['mycroft.system.active_skills']
		const active_skill_state = this.state[active_skill]
		// console.log("CURRENTLY ACTIVE SKILL:\n" + (JSON.stringify(active_skill)))
		// console.log("SKILL STATE:\n" + (JSON.stringify(active_skill_state)))
		if (active_skill && active_skill_state) {
				let active_skill_state_focus = active_skill_state['component_focus']
				if (active_skill_state_focus >= 1 || active_skill_state_focus == 0) {
					// console.log("COMPONENT FOCUS:\n" + (JSON.stringify(active_skill_state_focus )))
					return (
						<SkillComponentHandler
							activeSkill={active_skill}
							skillState={active_skill_state}
						/>
					)
				} else {
					return (null)
				}
		} else {
			return (null)
		}
	}
}