
export const handleFade = (targetSelector, duration) => {
	const target = document.querySelector(targetSelector)
	target.classList.add("fade-in")
	setTimeout(() => {
		target.classList.remove("fade-in")
		target.classList.add("fade-out")
	}, (duration))
}