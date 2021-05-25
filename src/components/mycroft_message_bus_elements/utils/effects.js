
// REWRITE THESE
export const handleFadeSlide = (targetSelector, duration) => {
	if ((typeof(targetSelector) != ("undefined" || null))) {
		handleSlide(targetSelector, duration)
		handleFade(targetSelector, duration)
	}
}

export const handleFade = (target, duration) => {
	const element = document.querySelector(target)
	if ((typeof(element) != ("undefined" || null)) && (typeof(element.classList) != ("undefined" || null))) {
		element.classList.add("fade-in")
		setTimeout(() => {
			element.classList.remove("fade-in")
			element.classList.add("fade-out")
		}, (duration))
	}
}

export const handleSlide = (target, duration) => {
	const element = document.querySelector(target)
	if ((typeof(element) != (null))) {
		if (typeof(element.classList) != (null)) {
			element.classList.add("offset")
			setTimeout(() => {
				element.classList.remove("offset")
				element.classList.add("slide-in")
			}, .1)
			setTimeout(() => {
				element.classList.remove("slide-in")
				element.classList.add("slide-out")
			}, (duration))
		}
	}
}