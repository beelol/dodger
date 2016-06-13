function Rect(left, top, width, height) {
  this.left = left;
  this.top = top;
  this.width = width;
  this.height = height;
}

Rect.prototype.isColliding = function (rect2) {
  return rect1.x < rect2.x + rect2.width &&
 rect1.x + rect1.width > rect2.x &&
 rect1.y < rect2.y + rect2.length &&
 rect1.length + rect1.y > rect2.y;
};

Rect.prototype.draw = function(color) {
  ctx.beginPath();
  ctx.rect(this.left, this.top, this.width, this.height);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
};

// module.exports = Rect;
