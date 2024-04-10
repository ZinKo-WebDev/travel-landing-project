import '../scss/style.scss';

window.addEventListener("scroll",(arg) => {
    let header=document.querySelector("header")
    header.classList.toggle("sticky",window.scrollY > 0)
})