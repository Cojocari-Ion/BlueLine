

const navbar = document.querySelector('nav');
const navbarToggler = document.querySelector('.toggler');
const windowWidth = window.innerWidth;
const linkUnderlined = document.querySelectorAll(".underline");
console.log(windowWidth);

if(windowWidth < 1140) {
  [].forEach.call(linkUnderlined, function(link) {
    link.classList.remove("underline");
});
};

//navbar toggle
navbarToggler.addEventListener("click", function() {
  const toggleMenu = document.querySelector('#toggleMenu');
  navbarToggler.classList.toggle("toggler-animated");
  toggleMenu.classList.toggle("toggleMenu");
});
//navbar toggle end

//navbar animated


window.addEventListener("scroll", function() {
  var top = window.scrollY;
  const height = window.innerHeight;

  if (top > height/4) {
	navbar.classList.add("nav-switch");
	
  } else {
	navbar.classList.remove("nav-switch");
  }
});




window.addEventListener("load", function() {
  navbar.classList.remove("transformY");

  
  let listOrder = -1;
  const links = document.querySelectorAll('li');
  var interval = setInterval(frame, 100);
  var length = links.length;
  
  
  function frame( ) {
	if (listOrder == length-1) {
	  clearInterval(interval);
	} else {
	  listOrder++;
	  links[listOrder].classList.remove("faded");
	}
  }
  


});
