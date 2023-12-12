/*
Name: Zaryab Khan
Student ID: 100851100
Date: 22 November 2023
Description:A dynamic, animated canvas experience 
with many bouncing balls is produced by this JavaScript code.
 It defines ball behavior, including as movement,
  boundary collisions, and inter-ball interactions, 
  by utilizing the HTML5 Canvas API. Size, color, 
  and velocity of the balls are produced at random; 
  they move smoothly over the canvas and change color 
  as they collide, producing a captivating visual effect.

*/


// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// Modeling a Ball

class Ball {
  constructor (x, y, velX, velY, color, size) {
this.x =x;
this.y =y;
this.velX = velX;
this. velY = velY;
this.color=color;
this.size = size ;

  }
  
  draw() {
ctx.beginPath();
ctx.fillStyle = this.color;
ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
ctx.fill();

  }
 update() {
if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
  this.velX = -(this.velX);
}
if ((this.y + this.size) >= height || (this.y -this.size) <= 0) {
  this.velY = -(this.velY);
}
this.x += this.velX;
this.y += this.velY;
}

collisionDetect () {
  for (const ball of balls) {
    if (!(this === ball)) {
      const dx = this.x - ball.x;
      const dy = this.y - ball.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + ball.size) {
        ball.color = this.color = randomRGB ();
      }
    }
  }
}

}
 
// Animation of balls
const balls = [];
while (balls.length <25) {
  const size = random(10,20);
  const ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );
  balls.push(ball);
}
function loop(){
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width,height);

  for(const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }
  requestAnimationFrame(loop);

}
loop();