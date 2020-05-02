const closableElems = document.querySelectorAll("[toast-close]");
closableElems.forEach(element => element.onclick = function() {
	var toast = element.closest(".toast");
	toast.animate([
		{ opacity: 1 },
		{ opacity: 0.1, offset: 0.7 },
		{ opacity: 0 }
	], 300);
	setTimeout(function() {
		toast.remove();
	}, 200);
});