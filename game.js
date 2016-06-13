let gameEnded = false;
let enemySpawnLoop;
let enemyMoveLoop;
let enemyDeleteLoop;
let gameLoop;

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
  clearInterval(enemyDeleteLoop);
}

function gameOver() {
  let bool = confirm("Game Over! Play again?");
  stop();
  if (bool) {
    clearEnemies();
    resetPlayer();
    startLoop();
  } else if (bool === false) {
    canvas.style.display = 'none';
  }
}

function startLoop() {
  enemySpawnLoop = setInterval(spawnEnemy, 200);
  enemyMoveLoop = setInterval(moveEnemies, 10);
  enemyDeleteLoop = setInterval(deleteEnemies, 500);
  gameLoop = setInterval(run, 10);
}


startLoop();
