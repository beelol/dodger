function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.toString = function () {
  return `${this.x}, ${this.y}`;
};

// module.exports = Vector;
