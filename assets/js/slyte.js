// menu
const menuBar = document.querySelector(".menu-bar")
menuBar.addEventListener("click", function(){
    menuBar.classList.toggle("active")
    document.querySelector("#menu").classList.toggle("active")
    document.querySelector(".header-right").classList.toggle("active")
})