import React, { Component, useEffect, useCallback} from 'react';
import { handleFade } from '../utils/effects'

export default class MycroftWiki extends React.Component {

	constructor(props) {
		super(props)
	}

	returnMediaHtml(mediaString){
		// console.log(mediaString)
		if (typeof(mediaString) == typeof("")) {
			if (mediaString.length > 0) {
				let fileTypeRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp|webm|svg|ogv)$/i
				let fileType = mediaString.match(fileTypeRegex).pop()
				switch (fileType) {
					case ("webm"):
					case ("ogv"):
						return (this.returnVideoHtml(mediaString))
				default:
						handleFade('.skill-container', 8000)
						return (
							<img src={mediaString}></img>
						)
				  break
				}
			}
		}
	}

	returnVideoHtml(videoUrl) {
		return (
			<video id="video_player" onLoadedMetadata={(e) => {this.hideVideoAfterDuration(e)}} autoPlay={true}>
				<source src={videoUrl} type="video/webm" />
			</video>
		)
	}
  
	hideVideoAfterDuration(event) {
		handleFade('.skill-container', event.target.duration)
	}

  render() {
  	const skill_props = this.props.skillState
		const component_name = this.props.componentName
		switch (component_name) {
			case "WikipediaDelegate":
				return (
					<div>
						{this.returnMediaHtml(skill_props.imgLink)}
						<h5>{skill_props.summary}</h5>
					</div>
				)
		  default:
	      console.log("Unhandled component for: " + component_name)
	      break
		}
  }
}