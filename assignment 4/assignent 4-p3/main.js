function random(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
// Modeling a Ball

class Ball {
  constructor (x, y, velX, velY, color, size) {
this.x =x;
this.y =y;
this.velX = velX;
this. velY = velY;
this.color=color;
this.size = size ;

  draw() {
ctx.beginPath();
ctx.fillStyle = this.color;
ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
ctx.fill();

