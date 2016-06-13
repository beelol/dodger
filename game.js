// const Actor = require('./actor');
// const Vector = require('./vector');
// const Input = require('./input');
// const Enemy = require('./enemy');
// const Player = require('./player');

let actors;
let enemySpawnLoop;
let enemyMoveLoop;
let gameLoop;
let player;

function clearEnemies() {
  // console.log(Enemy.enemies.length);

  Enemy.enemies.forEach(function (enemy) {
    // enemy.kill.call(enemy);
    enemy.stopCheckingForDeath.call(enemy);
  });

  Enemy.enemies = [];

  Actor.actors = Actor.actors.slice(0, 1)

  // console.log(Enemy.enemies.length);
}

function resetGame() {
  clearEnemies();
  player.reset();
  rightPressed = false;
  leftPressed = false;
}

function spawnPlayer() {
  player = Player.spawnPlayer();
}

function spawnEnemies() {
  Enemy.spawnEnemy();
}

function drawActors() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  Actor.actors.forEach(function(actor){
    actor.draw();
  });
}

function stop() {
  clearInterval(enemySpawnLoop);
  clearInterval(enemyMoveLoop);
  clearInterval(gameLoop);
}

function endGame() {
  let bool = confirm("Game Over! Play again?");

  stop();
  if (bool) {
    resetGame();
    startLoop();
  } else if (bool === false) {
    canvas.style.display = 'none';
  }
}

function startLoop() {
  enemySpawnLoop = setInterval(Enemy.spawnEnemy, 1000);
  // gameLoop = setInterval(run, 10);
  drawLoop = setInterval(drawActors, 10);
}

spawnPlayer();
resetGame();
startLoop();
