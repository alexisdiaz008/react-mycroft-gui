
export const handleFade = (targetSelector, duration) => {
	const target = document.querySelector(targetSelector)
		setTimeout(() => {
			target.classList.remove("fade-in")
			target.classList.add("fade-out")
		}, (duration))
	}
