let enemies = [];

function moveEnemies() {
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].y += 5;
  }
}

function drawEnemies() {
  for (let i = 0; i < enemies.length; i++) {
    drawRectangle(enemies[i].x, enemies[i].y, enemies[i].width, enemies[i].length, "red");
  }
}

function collidesWithPlayer(playerRect) {
  for (let i = 0; i < enemies.length; i++) {
    if (isColliding(playerRect, enemies[i])) {
      return true;
    }
  }

  return false;
}

function spawnEnemy() {
  let x = Math.random() * (canvas.width-50);
  let y = 0 - 50;

  let rect = {x:x, y:y, width:50, length:50};

  console.log("spawned an enemy at: " + x + ", " + y);

  enemies.push(rect);
}
