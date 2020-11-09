import React, { Component } from 'react';
import { handleFade } from '../utils/effects'

export const TextFrame = (props) => {
	setTimeout(() => {handleFade(`#${props.id}`, 8000)}, 1)
	return (
		<p
			id={props.id}
			className={props.className}>
			{props.text}
		</p>
	)
}

export const Overlay = (props) => {
	setTimeout(() => {handleFade('.overlay', 8000)}, 1)
	return	(
		<div className="overlay"></div>
	)
}

export const ImageFrame = (props) => {
	return (
		<div>
			<Overlay />
			<img 
				id={props.id}
				src={props.src}
				onLoad={(e) => {handleFade(`#${props.id}`, 12000)}}>
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
								onLoadedMetadata={(e) => {handleFade(`#${props.id}`, (e.target.duration*1000))}} 
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
						  src={mediaString}
						/>
					)
			  break
			}
		}
	}

	return (null)
}