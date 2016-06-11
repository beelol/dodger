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

  draw();
}

setInterval(spawnEnemy, 1000)
setInterval(moveEnemies, 10)
setInterval(run, 10);
