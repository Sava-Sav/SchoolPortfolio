const canvas = document.getElementById("gameCanvas");

const context = canvas.getContext("2d")

context.fillStyle = "#2A2C24" ;
context.fillRect(0, 0, 800, 600);

const playerWidth = 100;
const playerHeight = 100;
const playerColor = "green"
let x = 400;
let y = 300;

function update() {
    x = x + 5;

    context.clearRect(0, 0, 800, 600)
    
context.fillStyle = playerColor;
context.fillRect(
    x - (playerWidth / 2),
    y - (playerHeight / 2),
    playerWidth,
    playerHeight);
    
requestAnimationFrame(update);

}

update();