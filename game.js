var score = 0;
function loadCanvas() {

var canvas = document.getElementById("gameCanvas");
canvas.style.backgroundColor = "lightblue";
var ctx = canvas.getContext("2d");


    var xf = canvas.width/2;
    var yf = canvas.height-30;
    var xe = 110;
    var ye = 200;
    var dfx = 2;
    var dfy = -2;
    var dex = 3;
    var dey = -3;
    var ballRadius = 10;
    var rightPressed = false;
    var leftPressed = false;
    var upPressed = false;
    var downPressed = false;
    var playerX = 200;
    var playerY = 200;
    var playerHeight = 20;
    var playerWidth = 20;
    var playerSpeed = 5;
    var gameOver = false;

function drawPlayer() {
    ctx.beginPath();
    ctx.rect(playerX, playerY, playerHeight, playerWidth);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
    
    if(rightPressed && playerX < canvas.width-playerWidth) {
        playerX += playerSpeed;
    }
    if(leftPressed && playerX > 0) {
        playerX -= playerSpeed;
    }
    if(upPressed && playerY > 0) {
        playerY -= playerSpeed;
    }
    if(downPressed && playerY < canvas.height-playerHeight) {
        playerY += playerSpeed;
    }
    
    if(playerX - xf < playerWidth - 10 && playerY - yf < playerHeight - 10 && xf - playerX < playerWidth + 10 && yf - playerY < playerHeight + 10){
        dfx = -dfx;
        dfy = -dfy;
        score++;
    }
    if(playerX - xe < playerWidth - 10 && playerY - ye < playerHeight - 10 && xe - playerX < playerWidth + 10 && ye - playerY < playerHeight + 10){
        document.location.reload();
        clearInterval(interval);
    }
}
    
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
    
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
}
    
    
function drawFriend() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(xf, yf, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    xf += dfx;
    yf += dfy;
    
    if(xf + dfx > canvas.width-ballRadius || xf + dfx < ballRadius) {
    dfx = -dfx;
    }
    if(yf + dfy > canvas.height-ballRadius || yf + dfy < ballRadius) {
        dfy = -dfy;
        }
}
    
function drawEnemy() {
    ctx.beginPath();
    ctx.arc(xe, ye, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#00FF00";
    ctx.fill();
    ctx.closePath();
    xe += dex;
    ye += dey;
    
    if(xe + dex > canvas.width-ballRadius || xe + dex < ballRadius) {
    dex = -dex;
    }
    if(ye + dey > canvas.height-ballRadius || ye + dey < ballRadius) {
        dey = -dey;
    }
}
  
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText("Score: "+score, 8, 20);
};

function draw() {
    setInterval(drawFriend, 10);
    setInterval(drawPlayer, 10);
    setInterval(drawEnemy, 10);
    setInterval(drawScore, 10);
};
    
draw();

function gameOver() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText("Score: "+score, 200, 200);
    gameOver = true;
    };
};

function submit_score() {
    window.parent.postMessage(score, "*");
};