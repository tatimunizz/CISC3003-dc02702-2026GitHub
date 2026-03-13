/* add code here  */

document.addEventListener("focusin", e => {
	const highlight = e.target;
	if(highlight.classList.contains("hilightable")) {
//		highlight.style.backgroundColor = "yellow";
		highlight.classList.add("highlight");
	}
});

document.addEventListener("focusout", e => {
	const highlight = e.target;
	if(highlight.classList.contains("hilightable")) {
//		highlight.style.backgroundColor = "white";
		highlight.classList.remove("highlight");
	}
});

document.querySelector("form").addEventListener("submit", e => {
	let valid = true;
	
	document.querySelectorAll(".required").forEach(input => {
		if(input.value.trim() === "") {
			input.classList.add("error");
			valid = false;
		} else {
			input.classList.remove("error");
		}
	});
	
	if(!valid) {
		e.preventDefault();
	}
});