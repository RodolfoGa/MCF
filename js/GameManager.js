/**
 *
 */
var canvas = document.querySelector(".myCanvas");
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

function degToRad(degrees) {
	  return degrees * Math.PI / 180;
	};

ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);

ctx.translate(width/2, height/2);

var image = new Image();
image.src = '../img/walk-right.png';
image.onload = drawRight;

var image2 = new Image();
image2.src = '../img/walk-left.png';
image.onload = drawLeft;

var sprite = 0;
var posX = 0;
var refreshrate = 13;


function drawRight() {
	ctx.fillRect(-(width/2), -(height/2), width, height);
	ctx.drawImage(image, (sprite*102), 0, 102, 148, 0+posX, -74, 102, 148);
	if (posX % refreshrate === 0) {
	    if (sprite === 5) {
	      sprite = 0;
	    } else {
	      sprite++;
	    }
	  }
	if(posX > width/2) {
	    newStartPos = -((width/2) + 102);
	    posX = Math.ceil(newStartPos / refreshrate) * refreshrate;
	    console.log(posX);
	  } else {
	    posX += 6;
	    console.log(posX);
	  }
};

function drawLeft() {
	ctx.fillRect(-(width/2), -(height/2), width, height);
	ctx.drawImage(image2, (sprite*102), 0, 102, 148, 0+posX, -74, 102, 148);
	if (posX % refreshrate === 0) {
	    if (sprite === 0) {
	      sprite = 5;
	    } else {
	      sprite--;
	    }
	  }
	if(posX < -(width/2)-64) {
	    newStartPos = ((width/2) + 102);
	    posX = Math.ceil(newStartPos / refreshrate) * refreshrate;
	    console.log(posX);
	  } else {
	    posX -= 6;
	    console.log(posX);
	  }
};

var keyState = {};
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

function gameLoop() {
    if (keyState[37] || keyState[65]){
    	window.requestAnimationFrame(drawLeft);
    }
    if (keyState[39] || keyState[68]){
    	window.requestAnimationFrame(drawRight);
    }
    setTimeout(gameLoop, 10);
}
gameLoop();


