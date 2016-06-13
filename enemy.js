// const Actor = require('./actor');
// const Vector = require('./vector');

Enemy.enemies = [];

function Enemy(rect, team, color) {
  Actor.call(this, rect, team, color);

  this.parent = Actor.prototype;
}

function Surrogate() {};
Surrogate.prototype = Actor.prototype;
Enemy.prototype = new Surrogate();

Enemy.checkForDeletion = function() {
  for (let i = 0; i < Enemy.enemies.length; i++) {
    if (Enemy.enemies[i].outOfBounds()) {
      Enemy.enemies.splice(i,1);
      Actor.actors.splice(Actor.actors.indexOf(Enemy.enemies[i]), 1);
    }
  }
}

Enemy.spawnEnemy = function() {
  let left = Math.random() * (canvas.width-50);
  let top = -50;
  let rect = new Rect(left, top, 50, 50);

  let enemy = new Enemy(rect, 1, 'red');

  Actor.spawn(rect.left, rect.top, enemy);

  Enemy.enemies.push(enemy);
}

// Enemy.drawEnemies = function() {
//   for (let i = 0; i < Enemy.enemies.length; i++) {
//     Enemy.enemies[i].draw();
//   }
// }

// let rect = new Rect(0,0,20,20);
// let enemy = new Enemy(rect,1, 'red')
// Actor.spawn(rect.left, rect.top, enemy)

Enemy.prototype.receiveInput = function () {
  let magnitude = 1;

  let velocity = new Vector(0 * magnitude, 5 * magnitude);

  return velocity;
}

Enemy.prototype.tick = function() {
  this.parent.tick.call(this);

  this.move.call(this, this.receiveInput());

  Enemy.checkForDeletion();
}

// module.exports = Enemy;
