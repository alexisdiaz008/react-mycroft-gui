import React, { Component, useState, useEffect, useRef, useCallback } from 'react';
import { handleFade } from '../utils/effects'
import { handleFadeSlide } from '../utils/effects'

export const ContentElement = (props) => {
	const [display, setDisplay] = useState(true)
	const componentIsMounted = useRef(true)

	useEffect(() => {
		return () => {
			componentIsMounted.current = false
		}
	}, [])

	const updateElementDisplay = useCallback((duration) => {
		setTimeout(() => {
			if (componentIsMounted.current) setDisplay(false)
		}, (duration || 10000))
	}, [componentIsMounted])

  if (display == true) {
		switch (props.elementType) {
			case "TextFrame":
	    	return (
	    		<TextFrame
						id={props.id}
						className={props.className}
						text={props.text}
						updateElementDisplay={updateElementDisplay}
						duration={props.duration}
					/>
				)
			case "ImageFrame":
				return (
					<ImageFrame
						id={props.id}
						className={props.className}
						src={props.src}
						updateElementDisplay={updateElementDisplay}
						duration={props.duration}
						effectDuration={props.effectDuration}
					/>
				)
			case "MediaFrame":
				return (
					<MediaFrame
						id={props.id}
						className={props.className}
						mediaString={props.mediaString}
						updateElementDisplay={updateElementDisplay}
						duration={props.duration}
						effectDuration={props.effectDuration}
					/>
				)
			case "Overlay":
				return (
					<Overlay 
						duration={props.duration}
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
	// props.updateElementDisplay(props.duration)
	// setTimeout(() => {handleFade('.overlay', (props.effectDuration || 8000))}, (props.fadeDelay || 1))
	return	(
		<div className="overlay"></div>
	)
}

export const TextFrame = (props) => {
	props.updateElementDisplay(props.duration)
	// setTimeout(() => {handleFadeSlide(`#${props.id}`, (props.effectDuration || 8000))}, (props.fadeDelay || 1))
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
	props.updateElementDisplay(props.duration)
	return (
		<div>
			<Overlay />
			<img 
				id={props.id}
				className={props.className}
				src={props.src}
				onLoad={(e) => {handleFadeSlide(`#${props.id}`, (props.effectDuration || 9000))}}>
			</img>
		</div>
	)
}

export const MediaFrame = (props) => {
	console.log(props)
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
								className={props.className}
								onLoadedMetadata={
									(e) => {
										let duration = e.target.duration*1000
										props.updateElementDisplay(duration)
										handleFadeSlide(`#${props.id}`, (duration))
									}
								}
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
							id={props.id}
							className={props.className}
						  src={mediaString}
						  updateElementDisplay={props.updateElementDisplay}
							duration={props.duration}
							effectDuration={props.effectDuration}
						/>
					)
			  break
			}
		}
	}

	return (null)
}