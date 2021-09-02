let museX, museY, p;

function setup() {
  createCanvas(600, 400);
  
  p = new Pelotitas();
}

function draw() {
  background(31);
  p.dibujar(mouseX, mouseY);
  p.mecanicas();

}

class Pelotitas{
  constructor() {
    this.diam = random(10, 15);
    this.vel = 0.5;
  }

  dibujar(X , Y) {
    fill(15,random(120),random(255));
    ellipse(X, Y, this.diam, this.diam);
  }
  
  mecanicas() {
    this.x += random(-this.vel, this.vel);
    this.y += random(-this.vel, this.vel);
  }
}
