

const navbar = document.querySelector('nav');
const navbarToggler = document.querySelector('.toggler');
const windowWidth = window.innerWidth;
const linkUnderlined = document.querySelectorAll(".underline");
const secondSectionBackground = document.querySelector(".background");




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

//Counters
const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 12);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});

//onscroll text
window.onscroll = function() {
  const fadeIn = document.querySelector(".fadeIn")
  var top = window.scrollY;
  const height = window.innerHeight; 

  

  if (top > height/3) {
    
    fadeIn.classList.remove("faded");
  };
};

//grayscale filter toggle
function filteredOff() {
  secondSectionBackground.classList.add("grayscale-filtered");
}
function filteredOn() {
  secondSectionBackground.classList.remove("grayscale-filtered");
}






