const canvas = document.getElementById("gameCanvas");

const context = canvas.getContext("2d")

context.fillStyle = "#2A2C24" ;
context.fillRect(0, 0, 800, 600);

const playerWidth = 70;
const playerHeight = 100;
const playerColor = "#0e005d";
let playerX = 400;
let playerY = 300;

addEventListener("keydown", (event) => {
    if (event.key === "a")
        playerX -= 5;
    if (event.key === "d")
        playerX += 5;
})
function update() {
    //playerX = playerX + 5;

context.clearRect(0, 0, 800, 600)
    
context.fillStyle = "#ffffff";
context.fillRect(0, 0, 800, 600);

context.fillStyle = playerColor;
context.fillRect(
    playerX, 
    playerY, 
    playerWidth, 
    playerHeight);

requestAnimationFrame(update);

}

update();