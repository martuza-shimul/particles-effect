// let p;
const particles = [];

function setup() {
  // console.log("setup");
  createCanvas(window.innerWidth, window.innerHeight);
  // p = new Particle();

  const particlesLength = Math.floor(window.innerWidth / 8);

  for (let i = 0; i < particlesLength; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(47, 47, 162);
  particles.map((p, index) => {
    p.update();
    p.draw();
    p.checkParticles(particles.slice(index));
  });
}

class Particle {
  constructor() {
    //Position
    this.pos = createVector(random(width), random(height));
    //Velocity
    this.vel = createVector(random(-1.5, 1.5), random(-1.5, 1.5));
    //Size
    this.size = 10;
  }

  // Update movement by adding velocity
  update() {
    this.pos.add(this.vel);
    this.edges();
  }

  // Draw single particle
  draw() {
    noStroke();
    fill("#ffffff");
    circle(this.pos.x, this.pos.y, this.size);
  }

  // Detect edges
  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }

  // connect particles

  checkParticles(particles) {
    particles.map(particle => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

      if (d < 90) {
        stroke("rgba(246, 76, 114,0.3)");
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    });
  }
}
