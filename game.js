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

function resetGame() {
  spawnPlayer();
  //spawnEnemies();
  //startLoop();
}

function spawnPlayer() {
  Player.spawnPlayer();
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

function run() {

}

function stop() {
  clearInterval(enemySpawnLoop);
  clearInterval(enemyMoveLoop);
  clearInterval(gameLoop);
  // clearInterval(enemyDeleteLoop);
}

function endGame() {
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
  enemySpawnLoop = setInterval(Enemy.spawnEnemy, 1000);
  // enemyDeleteLoop = setInterval(checkForDeletion, 10)
  gameLoop = setInterval(run, 10);
  drawLoop = setInterval(drawActors, 10);
}

// console.log('hello');
resetGame();
startLoop();
