// generate a grid.
const colors = ["blue", "red", "green", "yellow", "purple", "orange", "black", "brown", "gray", "pink"];
const grid = document.querySelector('#grid');
grid.style.width = "540px";
grid.style.height = "540px";
let divs = [];
for (let i = 0; i < 30 * 30; i++) {
    divs[i] = document.createElement('div');
    divs[i].style.width = "16px";
    divs[i].style.height = "16px";
    divs[i].style.border = "1px solid #eeeeee";
    divs[i].addEventListener('mousemove', () => {
        divs[i].style.backgroundColor = colors[Math.floor(Math.random() * 10)];
     });
    grid.appendChild(divs[i]);
}

// add event listeners to size button.
const btn1 = document.querySelector('#squares');
btn1.addEventListener('click', () => { 
    const squares = parseInt(prompt("Enter number of squares per side."));
    if (squares > 100) squares = 100;
    for (div in divs) {
        grid.removeChild(divs[div]);
        delete divs[div];
    }
    grid.style.width = `${18 * squares}px`;
    grid.style.height = `${18 * squares}px`;
    for (let i = 0; i < squares * squares; i++) {
        divs[i] = document.createElement('div');
        divs[i].style.width = "16px";
        divs[i].style.height = "16px";
        divs[i].style.border = "1px solid #eeeeee";
        divs[i].addEventListener('mousemove', () => {
            divs[i].style.backgroundColor = colors[Math.floor(Math.random() * 10)];
        });
        grid.appendChild(divs[i]);
    }
 });