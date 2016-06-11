let rect1 = {
  x: 30,
  y: 25,
  width: 20,
  length: 20
};

let rect2 = {
  x: 20,
  y: 20,
  width: 20,
  length: 20
};

let rect3 = {
  x: 20,
  y: 59,
  width: 20,
  length: 20
};

let rect4 = {
  x: 30,
  y: 50,
  width: 20,
  length: 20
};

function drawRectangle(left, top, width, length, color) {
  ctx.beginPath();
  ctx.rect(left, top, width, length);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

function isColliding(rect1, rect2) {
  return rect1.x < rect2.x + rect2.width &&
 rect1.x + rect1.width > rect2.x &&
 rect1.y < rect2.y + rect2.length &&
 rect1.length + rect1.y > rect2.y
}
