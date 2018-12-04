function drawHealth(){
    ctx.fillRect(-15, -90, 80, 10);
	ctx.fillStyle = 'rgb(255, 0, 0)';
	ctx.fillRect(-15, -90, (cat.health/100)*80, 10);
};

function drawMenu(){
	ctx.fillStyle = 'rgba(225, 225, 225, 0.15)';
	ctx.fillRect(75, -150, width/8, 250);
	ctx.stroke();
};

function walkRight(){
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
};

function walkLeft(){
    ctx.drawImage(bgImage, -posX, -posY);
	ctx.drawImage(image2, (sprite*102), 0, 102, 148, 0, -74, 51, 74);
    if (posX % refreshrate === 0) {
	    if (sprite === 0) {
	      sprite = 5;
	    } else {
	      sprite--;
	    }
	  }
	    posX -= 6;
};

function walkUp(){
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

function walkDown(){
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