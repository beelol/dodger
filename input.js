let rightPressed = false
let leftPressed = false

let playerX = canvas.width/2 - 25;
let playerY = canvas.height - 50 - 25;
//
// function Input() {
//   // document.addEventListener("keydown", keyDownHandler, false);
//   //
//   // document.addEventListener("keyup", keyUpHandler, false);
// }

keyDownHandler = function(e) {
  if(e.keyCode == 39) {
    rightPressed = true;
  }
  else if(e.keyCode == 37) {
    leftPressed = true;
  }
}

keyUpHandler = function (e) {
  if(e.keyCode == 39) {
    rightPressed = false;
  }
  else if(e.keyCode == 37) {
    leftPressed = false;
  }
}

receiveUserInput = function() {
  let input = new Vector(0, 0);

  if (rightPressed) {
    input = new Vector(1, 0);
  } else if (leftPressed) {
    input = new Vector(-1, 0);
  }

  return input;
}

// module.exports = Input;

document.addEventListener("keydown", keyDownHandler, false);

document.addEventListener("keyup", keyUpHandler, false);
