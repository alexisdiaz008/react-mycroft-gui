import React, { Component, useState } from 'react';
import { handleFade } from '../utils/effects'
import { handleFadeSlide } from '../utils/effects'

export const ContentElement = (props) => {
	const [display, setDisplay] = useState(true);

  const updateElementDisplay = () => {
    setTimeout(() => {
      setDisplay(false);
    }, (props.duration || 5000));
  };

  if (display == true) {
		switch (props.elementType) {
			case "TextFrame":
	    	return (
	    		<TextFrame
						id={props.id}
						className={props.className}
						text={props.text}
						updateElementDisplay={updateElementDisplay}
					/>
				)
		default:
			return (null)
			break
		}
	}	else {
		return(null)
	}
}

export const Overlay = (props) => {
	// USE REACT HOOKS TO SET STATE FOR EACH COMPONENT TO LATER CHANGE THAT STATE AND REMOVE THE COMPONENT
	// setTimeout(() => {handleFade('.overlay', (props.duration || 8000))}, (props.fadeDelay || 1))
	return	(
		<div className="overlay"></div>
	)
}

export const TextFrame = (props) => {
	props.updateElementDisplay()
	// setTimeout(() => {handleFadeSlide(`#${props.id}`, (props.duration || 8000))}, (props.fadeDelay || 1))
	return (
		<div>
			<Overlay />
			<p
				id={props.id}
				className={props.className}>
				{props.text}
			</p>
		</div>
	)
}

export const ImageFrame = (props) => {
	return (
		<div>
			<Overlay />
			<img 
				id={props.id}
				src={props.src}
				onLoad={(e) => {handleFadeSlide(`#${props.id}`, (props.duration || 12000))}}>
			</img>
		</div>
	)
}

export default function MediaFrame(props) {
	const mediaString = props.mediaString
	if (typeof(mediaString) == typeof("")) {
		if (mediaString.length > 0) {
			let fileTypeRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp|webm|svg|ogv)$/i
			let fileType = mediaString.match(fileTypeRegex).pop()
			switch (fileType) {
				case ("webm"):
				case ("ogv"):
					return (
						<div>
							<Overlay />
							<video 
								id={props.id}
								onLoadedMetadata={(e) => {handleFadeSlide(`#${props.id}`, (e.target.duration*1000))}} 
								autoPlay={true}>
								<source 
									src={mediaString}
									type="video/webm" />
							</video>
						</div>
					)
			default:
					return (
						<ImageFrame
							duration={(props.duration || 12000)}
							id={props.id}
						  src={mediaString}
						/>
					)
			  break
			}
		}
	}

	return (null)
}