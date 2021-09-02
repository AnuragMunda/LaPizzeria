let slider = document.getElementsByClassName('material-icons-round')[0];
let back = document.getElementsByClassName("back")[0];
var element = document.getElementsByClassName('nav-links')[0];
let body = document.body;

slider.addEventListener('click', (event) => {
    event.preventDefault();
    let nav = document.querySelector('nav');

    if(nav.classList.contains("sticky")) {
        nav.classList.remove("sticky");
    }
    element.classList.toggle("side-nav");
    body.classList.toggle('fixed');
})

back.addEventListener('click', (event) => {
    event.preventDefault();
    element.classList.toggle('side-nav');
    body.classList.toggle('fixed');
})



window.addEventListener('scroll', () => {

    var element = document.getElementsByClassName('nav-links')[0];
    const nav = document.querySelector('nav');
    const currentScroll = window.pageYOffset;

    if (currentScroll>=80) {
        nav.classList.add("sticky");
    }

    else {
        nav.classList.remove("sticky");
    }
})