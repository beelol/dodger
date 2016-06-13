// const Actor = require('./actor');
// const Vector = require('./vector');
// const Input = require('./input');
// const Enemy = require('./enemy');
// const Player = require('./player');

let actors;
let enemyMoveLoop;
let gameLoop;
let player;

function resetGame() {
  spawnPlayer();
  startLoop();
}

function spawnPlayer() {
  Player.spawnPlayer();
}

function drawActors() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  Actor.actors.forEach(function(actor){
    actor.draw();
  });
}

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   // drawEnemies();
//   // drawPlayer();
// }

function run() {
  // if(rightPressed && playerX < canvas.width-50) {
  //   playerX += 7;
  // }
  // else if(leftPressed && playerX > 0) {
  //   playerX -= 7;
  // }

  // let playerRect = {x:playerX, y:playerY, width:50, length:50};
}

function stop() {
  clearInterval(enemySpawnLoop);
  clearInterval(enemyMoveLoop);
  clearInterval(gameLoop);
  clearInterval(enemyDeleteLoop);
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
  // enemySpawnLoop = setInterval(spawnEnemy, 1000);
  gameLoop = setInterval(run, 10);
  drawLoop = setInterval(drawActors, 10);
}

// console.log('hello');
resetGame();
// startLoop();
