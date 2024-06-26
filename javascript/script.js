'use strict';

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelector("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function (){
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for(let i = 0; i < navbarLinks.length; i++){
    navbarLinks[i].addEventListener("click", function (){
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
    })
}
const searchTogglers = document.querySelector("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for(let i = 0; i < searchTogglers .length; i++){
    searchTogglers[i].addEventListener("click", function (){
    searchBox.classList.toggle("active");
    });
}


const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function(){
  if(window.scrollY >= 200){
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});