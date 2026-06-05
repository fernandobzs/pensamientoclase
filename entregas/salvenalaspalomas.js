let blanca; 
let dali;   
let anguloReloj = 0;
let polvoTiempo = []; 
let flujosFuturo = []; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  blanca = createVector(random(50, width - 50), random(50, height - 50));
  dali = createVector(mouseX, mouseY);
  noCursor();

  // particulas de polvo 
  for (let i = 0; i < 60; i++) {
    polvoTiempo.push({
      x: random(0, width / 2),
      y: random(0, height),
      velY: random(0.5, 1.5),
      tam: random(1, 3.5)
    });
  }

  // Flujos difuminados para el lado derecho (futuro)
  for (let i = 0; i < 25; i++) {
    flujosFuturo.push({
      x: random(width / 2, width),
      y: random(height),
      ancho: random(150, 400), 
      alto: random(30, 100),
      velX: random(0.3, 1.5),  
      alpha: random(2, 6)      
    });
  }
}

function draw() {
  // Fondo base con rastro constante
  background(35, 20, 50, 40);

  //LADO IZQUIERDO
  noStroke();
  fill(120, 75, 45, 15); 
  rect(0, 0, width / 2, height);

  // polvito nostálgico
  fill(210, 190, 160, 50); 
  noStroke();
  for (let p of polvoTiempo) {
    circle(p.x, p.y, p.tam);
    p.y += p.velY;
    
    if (p.y > height) {
      p.y = 0;
      p.x = random(0, width / 2);
    }
  }

  // lado derecho
  fill(40, 60, 100, 10); 
  rect(width / 2, 0, width / 2, height);

  // --- mascara de recorte para fut. ---
  push();
  drawingContext.beginPath();
  drawingContext.rect(width / 2, 0, width / 2, height);
  drawingContext.clip();

  // Movimiento de luz difuminada
  noStroke();
  for (let f of flujosFuturo) {
    fill(100, 150, 255, f.alpha); 
    ellipse(f.x, f.y, f.ancho, f.alto);
    f.x += f.velX;
    
    if (f.x - f.ancho / 2 > width) {
      f.x = width / 2 - f.ancho / 2; 
      f.y = random(height);
    } 
  }
  pop(); 


  push();
  strokeCap(SQUARE);
  // Capas de brillo para efecto neón
  for (let i = 10; i > 0; i--) {
    stroke(160, 120, 255, 255 / (i * 1.5));
    strokeWeight(i * 1.5);
    line(width / 2, 0, width / 2, height);
  }
  //rayo
  stroke(255, 200);
  strokeWeight(1);
  line(width / 2, 0, width / 2, height);
  pop();

  //reloj de arena en el centro
  dibujarRelojFuturista();

  // dali mouse
  dali.x = lerp(dali.x, mouseX, 0.08);
  dali.y = lerp(dali.y, mouseY, 0.08);

  // q no se toquen
  let distancia = dist(dali.x, dali.y, blanca.x, blanca.y);
  
  if (distancia < 90) {
    blanca.x = random(50, width - 50);
    blanca.y = random(50, height - 50);
  }

  dibujarGato(blanca.x, blanca.y, color(240, 235, 225)); // Blanca
  dibujarGato(dali.x, dali.y, color(15, 15, 20)); // Dalí
}

function dibujarRelojFuturista() {
  push();
  translate(width / 2, height / 2);
  
  // eje del reloj
  stroke(255, 150);
  strokeWeight(1);
  line(0, -45, 0, 45);

  anguloReloj += 0.015;
  rotate(anguloReloj);
  
  // estructura holografic
  noFill();
  stroke(100, 200, 255, 200); // Azul eléctrico
  strokeWeight(1.5);
  
  // triangulo superior
  beginShape();
  vertex(-25, -40);
  vertex(25, -40);
  vertex(0, -5);
  endShape(CLOSE);
  
  // triang inferior
  beginShape();
  vertex(-25, 40);
  vertex(25, 40);
  vertex(0, 5);
  endShape(CLOSE);

  // anillo orbitando en sentido del reloj o contra creo
  rotate(-anguloReloj * 3);
  stroke(180, 100, 255, 180); // Violeta
  strokeWeight(1);
  ellipse(0, 0, 45, 10);
  
  pop();
}

function dibujarGato(x, y, col) {
  push();
  translate(x, y);
  fill(col);
  noStroke();
  
  // cuerpo (cabeza)
  ellipse(0, 0, 45, 35); 
  
  // orejas sj
  triangle(-18, -10, -22, -28, -5, -15);
  triangle(18, -10, 22, -28, 5, -15);
  
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
