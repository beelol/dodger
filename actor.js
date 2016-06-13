'use strict';
// const Rect = require('./rect');

function Actor(rect, team, color) {
  this.rect = rect;
  this.team = team;
  this.color = color;
}

Actor.actors = [];

Actor.prototype.isColliding = function(actor) {
  return this.rect.isColliding(actor.rect2);
};

Actor.prototype.move = function (vector) {
  // console.log("together we made it");

  this.rect.left += vector.x;
  this.rect.top += vector.y;
};

Actor.prototype.draw = function() {
  this.rect.draw(this.color);
}

Actor.prototype.tick = function () {
  // this.draw(this.color);
};

Actor.prototype.receiveInput = function () {
  // for the player, we move based on arrows

  // for enemy we move down
}

Actor.prototype.outOfBounds = function () {
  return this.rect.top > canvas.height;
}

Actor.spawn = function(left, top, actor) {
  actor.rect.left = left;
  actor.rect.top = top;

  Actor.actors.push(actor);

  setInterval(actor.tick.bind(actor), 10);
}

// module.exports = Actor;
//
