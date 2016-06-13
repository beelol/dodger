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

function deleteEnemies() {
  for (let i=0; i<enemies.length; i++) {
    if (enemies[i].y > canvas.height) {
      enemies.splice(i,1);
      console.log(`Deleted the enemy at ${enemies[i].y} `);
    }
  }
}

function clearEnemies() {
  enemies = [];
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
  let x = Math.random() * 200 + playerX - 75 ;
  if (x > canvas.width - 50) { x = canvas.width - 50; }
  if (x < 0) { x = 0;}
  let y = 0 - 50;

  let rect = {x:x, y:y, width:50, length:50};

  console.log("spawned an enemy at: " + x + ", " + y);

  enemies.push(rect);
}
