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
    alert("Game Over!");

    clearInterval(enemySpawnLoop);
    clearInterval(enemyMoveLoop);
    clearInterval(gameLoop);

    canvas.style.display="none";
  }

  draw();
}

let enemySpawnLoop = setInterval(spawnEnemy, 1000);
let enemyMoveLoop = setInterval(moveEnemies, 10);
let gameLoop = setInterval(run, 10);
