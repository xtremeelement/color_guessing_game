var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var goal = document.querySelector(".goal");
var messageDisplay = document.querySelector(".message");
var header = document.querySelector(".header");
var reset = document.querySelector(".reset");
var mode = document.querySelectorAll(".mode");

init();

function init() {
  setupModes();
  setupSquares();
  resetStuff();
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    //adds colors to squares
    squares[i].addEventListener("click", function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        reset.textContent = "Play Again?";
        alert("Correct!");
        changeColors(clickedColor);
        header.style.backgroundColor = clickedColor;
      } else {
        alert("Wrong!");
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function setupModes() {
  for (var i = 0; i < mode.length; i++) {
    mode[i].addEventListener("click", function() {
      mode[0].classList.remove("selected");
      mode[1].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      resetStuff();
    });
  }
}

function resetStuff() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  goal.textContent = pickedColor;
  header.style.backgroundColor = "steelblue";
  this.textContent = "New Colors";
  messageDisplay.textContent = "Pick the correct color";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    //adds colors to squares
    squares[i].style.backgroundColor = colors[i];
  }
}

reset.addEventListener("click", function() {
  resetStuff();
});

//changes colors of all squares
function changeColors(color) {
  for (var n = 0; n < squares.length; n++) {
    squares[n].style.backgroundColor = color;
  }
}

//chooses a random color from colors array
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//generates colors
function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

//generates random number for generateColors()
function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var newColor = `rgb(${red}, ${green}, ${blue})`;
  return newColor;
}
