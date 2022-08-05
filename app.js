let scrollDown = document.getElementById("lower");
let scrollUp = document.getElementById("upper");
let scrollEnd = document.getElementById("end");

scrollDown.addEventListener('click', () => {
    window.scrollBy(0, window.innerHeight);
});

scrollUp.addEventListener('click', () => {
    window.scrollBy(0, -window.innerHeight);
});

scrollEnd.addEventListener('click', () => {
    window.scrollBy(0, 99999);
    window.scrollTo(section)
});