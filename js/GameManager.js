/**
 */

let canvas = document.querySelector(".myCanvas");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');

function degToRad(degrees) {
	  return degrees * Math.PI / 180;
	};

let sprite = 0;
let posX = width/2 + 85 ;
let posY = height/2 + 250;
let refreshrate = 13;

let image = new Image();
image.src = 'img/walk-right.png';

let image2 = new Image();
image2.src = 'img/walk-left.png';

let bgImage = new Image();
bgImage.src = 'img/level2.png';

window.onload = function(){
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.fillRect(0, 0, width, height);
	ctx.translate(width/2, height/2);
	ctx.drawImage(bgImage, -posX, -posY);
	ctx.drawImage(image, (sprite*102), 0, 102, 148, 0, -74, 51, 74);
}

function drawRight() {
	ctx.fillRect(-(width/2), -(height/2), width, height);
	ctx.drawImage(bgImage, -posX, -posY);
	ctx.drawImage(image, (sprite*102), 0, 102, 148, 0, -74, 51, 74);
	if (posX % refreshrate === 0) {
	    if (sprite === 5) {
	      sprite = 0;
	    } else {
	      sprite++;
	    }
	  }
	    posX += 6;
	    console.log(posX);
};

function drawLeft() {
	ctx.fillRect(-(width/2), -(height/2), width, height);
	ctx.drawImage(bgImage, -posX, -posY);
	ctx.drawImage(image2, (sprite*102), 0, 102, 148, 0, -74, 54, 74);
	if (posX % refreshrate === 0) {
	    if (sprite === 0) {
	      sprite = 5;
	    } else {
	      sprite--;
	    }
	  }
	    posX -= 6;
	    console.log(posX);
};

function drawUp() {
	ctx.fillRect(-(width/2), -(height/2), width, height);
	ctx.drawImage(bgImage, -posX, -posY);
	ctx.drawImage(image2, (sprite*102), 0, 102, 148, 0, -74, 54, 74);
	if (posX % refreshrate === 0) {
	    if (sprite === 0) {
	      sprite = 5;
	    } else {
	      sprite--;
	    }
	  }
	    posY -= 6;
};

function drawDown() {
	ctx.fillRect(-(width/2), -(height/2), width, height);
	ctx.drawImage(bgImage, -posX, -posY);
	ctx.drawImage(image2, (sprite*102), 0, 102, 148, 0, -74, 54, 74);
	if (posX % refreshrate === 0) {
	    if (sprite === 0) {
	      sprite = 5;
	    } else {
	      sprite--;
	    }
	  }
	    posY += 6;
};

let keyState = {};
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
		if (keyState[38] || keyState[87]){
    	window.requestAnimationFrame(drawUp);
		}
		if (keyState[40] || keyState[83]){
    	window.requestAnimationFrame(drawDown);
    }
    setTimeout(gameLoop, 10);
}
gameLoop();


