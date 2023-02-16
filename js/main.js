let icon =  document.querySelector("header i");
let ul = document.querySelector("header ul");
icon.onclick = function (){
    ul.classList.toggle("active");
}