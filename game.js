let gameEnded = false;

function drawPlayer() {
  drawRectangle(playerX, playerY, 50, 50, "blue");
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawEnemies();
  drawPlayer();
}

function run() {
  if(rightPressed && playerX < canvas.width-50) {
    playerX += 7;
  }
  else if(leftPressed && playerX > 0) {
    playerX -= 7;
  }

  let playerRect = {x:playerX, y:playerY, width:50, length:50};

  if (collidesWithPlayer(playerRect)) {
    gameEnded = true;
    gameOver();
  }

  draw();
}

function stop() {
  clearInterval(enemySpawnLoop);
  clearInterval(enemyMoveLoop);
  clearInterval(gameLoop);
}

function gameOver() {
  let bool = confirm("Game Over! Play again?");
  stop();
  if (bool) {
    rightPressed = false;
    leftPressed = false;
    playerX = canvas.width/2 - 25;
    clearEnemies();
    enemySpawnLoop = setInterval(spawnEnemy, 1000);
    enemyMoveLoop = setInterval(moveEnemies, 10);
    gameLoop = setInterval(run, 10);
  } else if (bool === false) {
    canvas.style.display = 'none';
  }


}

let enemySpawnLoop = setInterval(spawnEnemy, 1000);
let enemyMoveLoop = setInterval(moveEnemies, 10);
let gameLoop = setInterval(run, 10);
