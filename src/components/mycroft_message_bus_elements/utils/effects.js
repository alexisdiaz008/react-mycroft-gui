
export const handleFadeSlide = (targetSelector, duration) => {
	// const target = document.querySelector(targetSelector)
	// target.classList.add("offset")
	// setTimeout(() => {
	// 	target.classList.add("fade-in")
	// 	target.classList.add("slide-in")
	// }, .5)
	// setTimeout(() => {
	// 	target.classList.remove("fade-in")
	// 	target.classList.add("fade-out")
	// 	target.classList.add("slide-out")
	// }, (duration))
	handleSlide(targetSelector, duration)
	handleFade(targetSelector, duration)
}

export const handleFade = (targetSelector, duration) => {
	const target = document.querySelector(targetSelector)
	target.classList.add("fade-in")
	setTimeout(() => {
		target.classList.remove("fade-in")
		target.classList.add("fade-out")
	}, (duration))
}

export const handleSlide = (targetSelector, duration) => {
	const target = document.querySelector(targetSelector)
	target.classList.add("offset")
	setTimeout(() => {
		target.classList.remove("offset")
		target.classList.add("slide-in")
	}, .1)
	setTimeout(() => {
		target.classList.remove("slide-in")
		target.classList.add("slide-out")
	}, (duration))
}