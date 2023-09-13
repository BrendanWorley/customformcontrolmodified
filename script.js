const apple = document.getElementById("fruitApple");
const labelApple = document.getElementById("labelApple");
const labelStrawberry = document.getElementById("labelStrawberry");
const pick = document.getElementById("pick");
const cherry = document.getElementById("fruitCherry");
const labelCherry = document.getElementById("labelCherry");

apple.addEventListener("keydown", () => {
	if (event.key === "ArrowDown") {
		labelApple.setAttribute("tabindex", 0);
		labelApple.focus();
	}
});

labelApple.addEventListener("keydown", () => {
	if (event.key === "ArrowUp") {
		pick.focus();
		labelApple.removeAttribute("tabindex");
	}
});

labelApple.addEventListener("click", () => {
	labelApple.blur();
});


cherry.addEventListener("keydown", () => {
	if (event.key === "ArrowUp") {
		labelCherry.setAttribute("tabindex", 0);
		labelCherry.focus();
	}
});

labelCherry.addEventListener("keydown", () => {
	if (event.key === "ArrowDown") {
		pick.focus();
		labelCherry.removeAttribute("tabindex");
	}
});

cherry.addEventListener("click", () => {
	labelCherry.blur();
});


