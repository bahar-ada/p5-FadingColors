let r = [], g = [], b = []

function setup() {
  createCanvas(1000, 400);

  for (let i = 0; i < 100; i++) {
    r[i] = random(255)
    g[i] = random(255)
    b[i] = random(255)
  }
}

function draw() {
  background(220);

  for(let i=0; i<100; i++){
    r[i] +=0.5
    g[i] +=0.5
    b[i] +=0.5
  }

  for(let i=0; i<100; i++){
    noStroke()
    fill(r[i], b[i], g[i])
    rect(i*10, 0, 10, height)
  }
}
