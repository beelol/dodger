let rightPressed = false
let leftPressed = false

let playerX = canvas.width/2 - 25;
let playerY = canvas.height - 50 - 25;

document.addEventListener("keydown", keyDownHandler, false);

document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function resetPlayer() {
  rightPressed = false;
  leftPressed = false;
  playerX = canvas.width/2 - 25;
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}
