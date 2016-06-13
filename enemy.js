// const Actor = require('./actor');
// const Vector = require('./vector');
Enemy.enemies = [];

function Enemy(rect, team, color) {
  Actor.call(this, rect, team, color);

  this.parent = Actor.prototype;
  let deletionLoop;
}

function Surrogate() {};
Surrogate.prototype = Actor.prototype;
Enemy.prototype = new Surrogate();

Enemy.prototype.checkForDeletion = function() {
  if (this.outOfBounds()) {
    this.kill();
  }
}

Enemy.prototype.kill = function() {
  Enemy.enemies.splice(Enemy.enemies.indexOf(this), 1);
  Actor.actors.splice(Actor.actors.indexOf(this), 1);

  this.stopCheckingForDeath();
}

Enemy.prototype.stopCheckingForDeath = function() {
  clearInterval(this.deletionLoop);
}

Enemy.spawnEnemy = function() {
  let left = Math.random() * (canvas.width-50);
  let top = -50;

  let rect = new Rect(left, top, 50, 50);

  let enemy = new Enemy(rect, 1, 'red');

  Actor.spawn(rect.left, rect.top, enemy);

  Enemy.enemies.push(enemy);

  enemy.deletionLoop = setInterval(enemy.checkForDeletion.bind(enemy), 10)
}

Enemy.prototype.receiveInput = function () {
  let magnitude = 4;

  let velocity = new Vector(0 * magnitude, 1 * magnitude);

  return velocity;
}

Enemy.prototype.tick = function() {
  // this.parent.tick.call(this);


  this.move.call(this, this.receiveInput());
}

// module.exports = Enemy;
