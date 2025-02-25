const mode = document.getElementById("mode");

const hider = document.getElementById("hider");

const body = document.querySelector("body");

mode.addEventListener("click", (e)=>{
    hider.classList.toggle("right-move");
    body.classList.toggle("dark-mode");
})