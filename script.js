const colors = ['red', 'green', 'blue'];
let colorBtn, bodyBcg;


function changeColor() {
    let random = Math.floor(Math.random() * colors.length)
    bodyBcg.style.backgroundColor = colors[random];
}

document.addEventListener('DOMContentLoaded', (event) => {
    colorBtn = document.querySelector('.colorBtn');
    bodyBcg = document.querySelector('body');
    colorBtn.addEventListener('click', changeColor);
})