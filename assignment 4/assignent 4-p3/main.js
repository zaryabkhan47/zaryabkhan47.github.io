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

