'use strict';
/* =================== Main Variables =================== */
let btnUp = document.querySelector('.btn_up');
let btnOpenNav = document.querySelector('.open_nav');
let btnCloseNav = document.querySelector('.close_nav');
let navMenu = document.querySelector('.nav_menu');
let navbar = document.querySelector('nav');
let serviceBar = document.querySelector('.open_close_service');
let dropdown = document.querySelector('.dropdown');
let choice1 = document.querySelector('.choice1');
let choice2 = document.querySelector('.choice2');
let choice3 = document.querySelector('.choice3');
let info1 = document.querySelector('.info1');
let info2 = document.querySelector('.info2');
let info3 = document.querySelector('.info3');

/* =================== Menu Show (Navbar) ================== */
btnOpenNav.addEventListener('click', function() {
    navMenu.style.top = '0';
});

/* ==================== Close Button  ======================== */
btnCloseNav.addEventListener('click', function() {
    navMenu.style.top = '-100%';
});

/* =================== Change of Navbar ==================== */
window.addEventListener('scroll', function() {
    var scrollNav = window.scrollY;
    if(scrollNav >= '60') {
        btnUp.classList.remove('hidden');
        navbar.classList.add('nav_fixed');
    }
    else {
        btnUp.classList.add('hidden');
        navbar.classList.remove('nav_fixed');
    }
});

/* =============== About ================= */
choice1.addEventListener('click', function() {
	info1.classList.remove('hidden');
	info2.classList.add('hidden');
	info3.classList.add('hidden');
});
choice2.addEventListener('click', function() {
	info1.classList.add('hidden');
	info2.classList.remove('hidden');
	info3.classList.add('hidden');
});
choice3.addEventListener('click', function() {
	info1.classList.add('hidden');
	info2.classList.add('hidden');
	info3.classList.remove('hidden');
});

/* =============== products ================= */
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

// selected.addEventListener('click', () => {
//   optionsContainer.classList.toggle("active");
// });

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});


/* =============== Home Inner First Slides ================= */
const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}

/* ================ Nav PubUp =============== */
serviceBar.addEventListener('click', function () {
	dropdown.classList.toggle('hide');
})