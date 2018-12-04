let canvas = document.querySelector(".myCanvas");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');

function degToRad(degrees) {
	  return degrees * Math.PI / 180;
	};

cat = new Cat("Catto", 100, 10);

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
	ctx.fillRect(-15, -90, 80, 10);
	ctx.fillStyle = 'rgb(255, 0, 0)';
	ctx.fillRect(-15, -90, (cat.health/100)*80, 10);
};

function drawRight() {
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.fillRect(-(width/2), -(height/2), width, height);
	walkRight();
	drawHealth();
};

function drawLeft() {
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.fillRect(-(width/2), -(height/2), width, height);
	walkLeft();
	drawHealth();
};

function drawUp() {
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.fillRect(-(width/2), -(height/2), width, height);
	walkUp();
	drawHealth();
};

function drawDown() {
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.fillRect(-(width/2), -(height/2), width, height);
	walkDown();
	drawHealth();
};

let keyState = {};
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

function gameLoop() {
		//left arrow, A
    if (keyState[37] || keyState[65]){
    	window.requestAnimationFrame(drawLeft);
		}
		//right arrow, D
    if (keyState[39] || keyState[68]){
    	window.requestAnimationFrame(drawRight);
		}
		//Up arrow, W
		if (keyState[38] || keyState[87]){
    	window.requestAnimationFrame(drawUp);
		}
		//Down arrow, S
		if (keyState[40] || keyState[83]){
    	window.requestAnimationFrame(drawDown);
		}
		//esc key
		if (keyState[27]){
    	window.requestAnimationFrame(drawMenu);
    }
    setTimeout(gameLoop, 10);
}
gameLoop();


