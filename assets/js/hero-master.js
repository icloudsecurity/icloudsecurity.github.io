document.addEventListener("keydown", e => {
	
		e.preventDefault();
	
	// fast links
	if(
		e.key.toLowerCase() === "h"
		&& e.altKey
	  ){
			window.location = "https://lehresjon.se/"
	}
	
	if(
		e.key.toLowerCase() === "a"
		&& e.altKey
	  ){
			window.location = "https://lehresjon.se/about"
	}
	
	if(
		e.key.toLowerCase() === "b"
		&& e.altKey
	  ){
			window.location = "https://lehresjon.se/blog"
	}
	
	if(
		e.key.toLowerCase() === "p"
		&& e.altKey
	  ){
			window.location = "https://lehresjon.se/portfolio"
	}
	
	if(
		e.key.toLowerCase() === "c"
		&& e.altKey
	  ){
			window.location = "https://lehresjon.se/contact"
	}
	
	// Screen switch darkness.
	if(
		e.key.toLowerCase() === "b"
		&& e.ctrlKey
	  ){
			document.body.style.color = "#ffffff";
			document.body.style.backgroundColor = "#2E2E2E";
	}else if(
		e.key.toLowerCase() === "b"
	  ){
			document.body.style.color = "#000000";
			document.body.style.backgroundColor = "#ffffff";
	}
	
});