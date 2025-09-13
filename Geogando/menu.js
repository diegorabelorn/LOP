function menu(){
  

  
  image(onda, -200, -300);
  image(globe, -100, 140);
  
  stroke(color(0, 170, 255))
  fill(51);
  rect(310, 190, 130, 35, 35);
  rect(310, 235, 130, 35, 30);
  rect(310, 280, 130, 35, 30);
  rect(310, 325, 130, 35, 30);
   
  strokeWeight(2);
  stroke(color(0, 170, 255));
  c = color(255);
  fill(c);
  textSize(15)
  textStyle(NORMAL);
  text("INICIAR", 346, 213);
  text("OPÇÕES", 344, 259);
  text("CRÉDITOS", 338, 303);
  text("SAIR", 355, 348);
  
  strokeWeight(2);
  stroke(color(0, 255, 255));
  c = color(0);
  fill(c);
  textSize(40)
  textStyle(BOLD);
  text("GEOGANDO", 125, 75)
  
  strokeWeight(2);
  stroke(color(0, 170, 255));
  c = color(0);
  fill(c);
  textSize(20)
  textStyle(BOLD);
  text("América Latina", 130, 100)
  
    
}

