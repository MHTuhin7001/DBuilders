window.addEventListener("scroll", function () {
	var nav = document.querySelector("header");
	nav.classList.toggle("fixed-top", window.scrollY > 100);
});
