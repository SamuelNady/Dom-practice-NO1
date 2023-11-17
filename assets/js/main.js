const img = document.querySelector("img");
const heading = document.querySelector("h1");
const btns = document.querySelectorAll("button");

btns[0].addEventListener("click", function() {
    img.src = "assets/images/2.png";
});
btns[1].addEventListener("click", function() {
    heading.innerText = "Now That's Better";
});
btns[2].addEventListener("click", function() {
    heading.classList.toggle("color");
});