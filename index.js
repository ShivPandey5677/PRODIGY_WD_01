const ham = document.querySelector(".ham");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
ham.addEventListener("click",mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    ham.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    ham.classList.remove("active");
    navMenu.classList.remove("active");
}
window.addEventListener("scroll",function(){
    var na=document.querySelector("nav");
    na.classList.toggle("sticky",window.scrollY>0);

})
var na=document.querySelector("nav");
na.addEventListener("mouseover",function(){
    na.classList.toggle("sticky");
})
na.addEventListener('mouseout', () => {
    na.classList.toggle("sticky");
  });