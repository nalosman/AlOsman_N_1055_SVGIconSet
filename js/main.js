(() => {
console.log('my JS is workin!!!');

// VARIABLES GO HEREE
allIcons = document.querySelectorAll(".indivIcon img");


// FUNCTIONS GO HERE
function logTheSVG() {
		console.log(this.id);
	}


// EVENTS GO HERE

// log
allIcons.forEach(item=> {
	item.addEventListener("click", logTheSVG);
})

})();
