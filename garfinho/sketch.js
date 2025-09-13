function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  
//CABEÇA, CABELO E CORPO
  let c = color(255, 255, 255);
  fill(c);
  noStroke();
  ellipse(200, 90, 90, 110);
  rect(185, 120, 30, 200);
  triangle(170, 10, 180, 45, 157, 75);
  triangle(190, 15, 200, 40, 180, 45);
  triangle(210, 15, 220, 45, 200, 40);
  triangle(230, 10, 240, 75, 220, 45);
  
//OLHOS
  strokeWeight(1);
  stroke(51);
  c = color(245);
  fill(c);
  ellipse(180, 80, 32, 40);
  ellipse(215, 84, 25, 30);  
  c = color(0);
  fill(c);
  ellipse(180, 87, 17, 20);  
  c = color(0);
  fill(c);
  ellipse(217, 90, 10, 13);
  
//BOCA
  strokeWeight(4);
  stroke(color(0, 170, 255));
  c = color(255);
  fill(c);
  arc(200, 120, 50, 35, 0, PI + QUARTER_PI, CHORD);

//DETALHES CORPO
  strokeWeight(2);
  stroke(color(200, 200, 200));
  c = color(200);
  fill(c);
  circle(196, 170, 5);
  circle(200, 225, 5);
  circle(202, 280, 5);
  
//BRAÇO ESQUERDO
  noFill();
  strokeWeight(8)
  stroke(230, 0, 0);
  curve(100, 100, 167, 55, 185, 50, 175, 50);
  curve(30, 120, 186, 50, 230, 65, 220, 75);
  strokeWeight(8)
  curve(30, 120, 95, 180, 180, 205, 220, 75);
  
//MÃO ESQUERDA
  strokeWeight(6);
  stroke(color(230, 0, 0));
  c = color(210, 0, 0);
  fill(c);
  rect(40, 175, 48, 10, 20);
  rect(87, 130, 10, 50, 20);
  rect(87, 180, 10, 50, 20);
  
//BRAÇO DIREITO  
  strokeWeight(8)
  stroke(230, 0, 0);
  curve(150, 150, 185, 200, 220, 203, 170, 150);
  noFill();
  curve(150, 150, 219, 202, 310, 120, 170, 150);

//MÃO DIREITA
  strokeWeight(6);
  stroke(color(230, 0, 0));
  c = color(210, 0, 0);
  fill(c);
  rect(262, 110, 48, 10, 20);
  rect(310, 110, 48, 10, 20);
  rect(305, 60, 10, 50, 20);
  
//BASE CHICLETE  
  strokeWeight(6);
  stroke(color(222, 184, 135));
  c = color(222, 184, 135);
  fill(c);
  arc(205, 340, 100, 90, 3000, PI + PI, PIE);

//PÉS
  strokeWeight(30);
  stroke(color(245, 245, 220));
  line(165, 370, 170, 350);
  line(250, 360, 240, 340);
  
//ARCO-ÍRIS
  strokeWeight(3);
  stroke(color(255, 0, 0))
  noFill()
  arc(246, 350, 20, 20, 6, PI, OPEN);
  strokeWeight(3);
  
  stroke(color(255, 127, 0))
  noFill()
  arc(246, 349.5, 18, 18, 6, PI, OPEN);
  
  stroke(color(255, 255, 0))
  noFill()
  arc(246, 349, 16, 16, 6, PI, OPEN);
  
  stroke(color(0, 255, 0))
  noFill()
  arc(246, 348.5, 14, 14, 6, PI, OPEN);

  stroke(color(0, 0, 255))
  noFill()
  arc(246, 348, 12, 12, 6, PI, OPEN);
  
  stroke(color(160, 32, 240))
  noFill()
  arc(246, 347.5, 10, 10, 6, PI, OPEN);

  stroke(color(221, 160, 221))
  c = color(221, 160, 221);
  fill(c);
  arc(246, 347, 4, 4, 6, PI, OPEN);
