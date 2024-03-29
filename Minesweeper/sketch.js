//Minesweeper
var grid;
var cols;
var rows;
var w = 20;
var totalBees = 10;

function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
  }
  return arr; 
}

function setup() {
  createCanvas(201, 201);
  cols = floor(width / w);
  rows = floor(height / w);
  grid = make2DArray(20, 20);
  for (var i = 0; i < cols; i++) {
  	for (var j = 0; j < rows; j++) {
  		grid[i][j] = new Cell(i, j, w);
  	}
  }

  //pick totalBees spots
  var options = [];
  for (var i = 0; i < cols; i++) {
  	for (var j = 0; j < rows; j++) {
  		options.push([i, j]);
  	}
  }
  for (var n = 0; n < totalBees; n++) {
 		index = floor(random(options.length));
 		var choice = options[index];
 		var i = choice[0]
 		var j = choice[1]
 		options.splice(index, 1);
 		grid[i][j].bee = true;
  }

//count neighbor bees
  for (var i = 0; i < cols; i++) {
  	for (var j = 0; j < rows; j++) {
  		grid[i][j].countBees();
		}
	}
}

// function mousePressed(){
//     var cellX = mouseX / cellWidth;
//     var cellY = mouseY / cellHeight;
//     grid[cellX][cellY].reveal();
// }

function gameOver() {
	for (var i = 0; i < cols; i++) {
  	for (var j = 0; j < rows; j++) {
  		grid[i][j].revealed = true;
  	}
  }
}

function mousePressed() {
  for (var i = 0; i < cols; i++) {
  	for (var j = 0; j < rows; j++) {
  		if (grid[i][j].contains(mouseX, mouseY)) {
  			grid[i][j].reveal();
  			if (grid[i][j].bee) {
  				gameOver();
  			}
  		}
  	}
  }
}

function draw() {
  background(255);
  for (var i = 0; i < cols; i++) {
  	for (var j = 0; j < rows; j++) {
  		grid[i][j].show()   ;
  	}
  }
}