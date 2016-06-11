function drawPlayer() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRectangle(playerX, playerY, 50, 50);
}

function draw() {

  // y += dy;
  // drawRectangle(rect1.x, rect1.y, rect1.width, rect1.length, 'red');
  //
  // drawRectangle(rect2.x, rect2.y, rect2.width, rect2.length, 'green');
  //
  // drawRectangle(rect3.x, rect3.y, rect3.width, rect3.length, 'red');
  //
  // drawRectangle(rect4.x, rect4.y, rect4.width, rect4.length, 'green');

  drawPlayer();
}

function run() {
  if(rightPressed && playerX < canvas.width-50) {
    playerX += 7;
  }
  else if(leftPressed && playerX > 0) {
    playerX -= 7;
  }
  draw();
}

setInterval(run, 10);
