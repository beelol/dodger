// const Actor = require('./actor');
// const Vector = require('./vector');
// const Input = require('./input');
// const Rect = require('./rect');

function Player(rect, team, color) {
  Actor.call(this, rect, team, color);

  this.parent = Actor.prototype;
}

function Surrogate() {};
Surrogate.prototype = Actor.prototype;
Player.prototype = new Surrogate();

Player.spawnPlayer = function() {
  let playerRect = new Rect(canvas.width/2 + 50/2, canvas.height - 50 - 10, 50, 50);

  let player = new Player(playerRect, 0, 'blue');

  Actor.spawn.call(player, playerRect.left, playerRect.top, player);

  return player;
};

Player.prototype.move = function (vector) {
  let tooFarRight = this.rect.left + this.rect.width + vector.x > canvas.width;

  let tooFarLeft = this.rect.left + vector.x < 0;

  if (tooFarLeft || tooFarRight) {
    return;
  }

  this.parent.move.call(this, vector);
};

Player.prototype.receiveInput = function () {
  let magnitude = 7;

  let input = receiveUserInput();

  let velocity = new Vector(input.x * magnitude, input.y * magnitude);

  return velocity;
};

Player.prototype.tick = function() {
  // this.draw(this.color);
  let that = this;

  Enemy.enemies.forEach(function (enemy) {
    console.log();
    if (enemy.isColliding(that)) {
      // console.log(that + ' collided with ' + enemy);
      endGame();
    }
  });

  this.move(this.receiveInput());
};

Player.prototype.reset = function() {
  let playerRect = new Rect(canvas.width/2 + 50/2, canvas.height - 50 - 10, 50, 50);

  this.rect = playerRect;
}

// module.exports = Player;
