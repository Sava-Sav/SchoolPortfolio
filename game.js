const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d")

const playerWidth = 70;
const playerHeight = 100;

const enemyWidth = 60;
const enemyHeight = 70;

const targetFPS = 60;

let timeLast = 0;

let playerX = 400;
let playerY = 300;

let enemyX = 100;
let enemyY = 100;

let playerSpeed = 125;

let buttonADown = false;
let buttonDDown = false;
let buttonWDown = false;
let buttonSDown = false;

addEventListener("keydown", (event) => {
    if (event.key === "a")
        buttonADown = true;

    if (event.key === "d")
        buttonDDown = true;

    if (event.key === "w")
        buttonWDown = true;

    if (event.key === "s")
        buttonSDown = true;
});

addEventListener("keyup", (event) => {
    if (event.key === "a")
        buttonADown = false;

    if (event.key === "d")
        buttonDDown = false;

    if (event.key === "w")
        buttonWDown = false;

    if (event.key === "s")
        buttonSDown = false;
});

function update(timeCurrent)
{
    const deltaTime = (timeCurrent - timeLast) / 1000;
    const singleFrameTime = (1000 / targetFPS) / 1000;
    if (deltaTime < singleFrameTime)
    {
        requestAnimationFrame(update());
        console.log("asdf")
        return;
    }

    if (buttonADown)
        playerX -= playerSpeed * deltaTime;

    if (buttonDDown)
        playerX += playerSpeed * deltaTime;

    if (buttonWDown)
        playerY -= playerSpeed * deltaTime;

    if (buttonSDown)
        playerY += playerSpeed * deltaTime;

    if ((playerX + (playerWidth/2)) >= canvas.width)
    {
        playerX = canvas.width - (playerWidth/2);
    }

    if ((playerX - (playerWidth/2)) < 0)
    {
        playerX = playerWidth/2;
    }

    if ((playerY + (playerHeight/2)) >= canvas.height)
    {
        playerY = canvas.height - (playerHeight/2);
    }

    if ((playerY - (playerHeight/2)) < 0)
    {
        playerY = playerHeight/2;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#2A2C24";
    context.fillRect(
        playerX - (playerWidth  / 2),
        playerY - (playerHeight / 2),
        playerWidth,
        playerHeight);

   
    context.fillStyle = "#ae0000";
    context.fillRect(
        enemyY - (enemyWidth  / 2),
        enemyX - (enemyHeight / 2),
        enemyWidth,
        enemyHeight);


    timeLast = timeCurrent;

    requestAnimationFrame(update);
}

function enemySpawn(enemy)
{

}



requestAnimationFrame(update);