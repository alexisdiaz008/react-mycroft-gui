import React, { Component } from 'react';
import { handleFade } from '../utils/effects'

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
						<video 
							id="video_player"
							onLoadedMetadata={(e) => {handleFade('.skill-container', (e.target.duration*1000))}} 
							autoPlay={true}>
							<source src={mediaString} type="video/webm" />
						</video>
					)
			default:
					return (
						<img 
							src={mediaString}
							onLoad={(e) => {handleFade('.skill-container', 8000)}}>
						</img>
					)
			  break
			}
		}
	}

	return (null)
}