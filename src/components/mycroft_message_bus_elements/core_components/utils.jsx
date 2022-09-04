import React, {
	Component,
	useState,
	useEffect,
	useRef,
	useCallback,
} from "react";
import { handleFade } from "../utils/effects";
import { handleFadeSlide } from "../utils/effects";

export const ContentElement = (props) => {
	const [display, setDisplay] = useState(true);
	const isMounted = useRef(false);

	let timeOutDisplayUpdate = (duration) => {
		setTimeout(() => {
			if (isMounted.current) {
				setDisplay(false);
			}
		}, duration || 10000);
	};
	const updateElementDisplay = useCallback((duration) => {
		timeOutDisplayUpdate(duration);
	}, []);

	if (props.display) {
		const { display_event, display_event_callback } = props.display;
		if (
			display == false &&
			display_event &&
			display_event_callback &&
			isMounted
		) {
			setDisplay(true);
			timeOutDisplayUpdate(props.duration);
			display_event_callback();
		}
	}

	useEffect(() => {
		isMounted.current = true;
		return () => {
			isMounted.current = false;
		};
	}, []);

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
				);
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
				);
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
				);
			case "Overlay":
				return (
					<Overlay
						id={'overlay'}
						duration={props.duration}
						updateElementDisplay={updateElementDisplay}
					/>
				);
			default:
				return null;
		}
	}

	return null;
};

export const Overlay = ({
	duration,
	updateElementDisplay,
}) => {
	useEffect(() => {
		updateElementDisplay(duration);
	}, []);

	// props.updateElementDisplay(props.duration)
	// setTimeout(() => {handleFade('.overlay', (props.effectDuration || 8000))}, (props.fadeDelay || 1))
	return <div id='overlay' className="overlay"></div>;
};

export const TextFrame = ({
	text,
	id,
	className,
	duration,
	updateElementDisplay,
}) => {
	useEffect(() => {
		updateElementDisplay(duration);
	}, []);

	// setTimeout(() => {handleFadeSlide(`#${props.id}`, (props.effectDuration || 8000))}, (props.fadeDelay || 1))
	return (
		<>
			<p id={id} className={className}>
				{text}
			</p>
		</>
	);
};

export const ImageFrame = ({
	id,
	src,
	className,
	duration,
	updateElementDisplay,
}) => {
	useEffect(() => {
		updateElementDisplay(duration);
	}, []);
	return (
		<img
			id={id}
			className={className}
			src={src}
			onLoad={(e) => {
				// handleFadeSlide(`#${props.id}`, (props.effectDuration || 9000))
			}}
		></img>
	);
};

export const MediaFrame = ({
	mediaString,
	id,
	className,
	duration,
	updateElementDisplay,
}) => {
	if (typeof mediaString == typeof "") {
		if (mediaString.length > 0) {
			let fileTypeRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp|webm|svg|ogv)$/i;
			let fileType = mediaString.match(fileTypeRegex).pop();
			switch (fileType) {
				case "webm":
				case "ogv":
					return (
						<div>
							<Overlay />
							<video
								id={id}
								className={className}
								onLoadedMetadata={(e) => {
									let duration = e.target.duration * 1000;
									updateElementDisplay(duration);
									// handleFadeSlide(`#${props.id}`, (duration))
								}}
								autoPlay={true}
							>
								<source src={mediaString} type="video/webm" />
							</video>
						</div>
					);
				default:
					return (
						<ImageFrame
							id={id}
							className={className}
							src={mediaString}
							updateElementDisplay={updateElementDisplay}
							duration={duration}
						/>
					);
			}
		}
	}

	return null;
};
