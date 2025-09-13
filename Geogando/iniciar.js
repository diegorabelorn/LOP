function iniciar(){
  
  image(mapa,0, 80, 500, 350);
  image(home,435,10, 60, 60);
 // image(recursonatural,2,300, 200,80);
  stroke(color(0, 170, 255))
  fill(51);
  rect(100, 20, 300, 35, 35);
  
  strokeWeight(2);
  stroke(color(0, 170, 255));
  c = color(255);
  fill(c);
  textSize(15)
  textStyle(NORMAL);
  text("ESCOLHA UMA REGIÃO", 165, 43);
  
  strokeWeight(1);
  stroke(color(295, 230, 266));
  c = color(0,0,0);
  fill(c);
  circle(150, 139, 10);  //Mexico
  circle(240, 220, 10); //Peru
  circle(290, 170, 10);  //venezuela
  circle(290, 320, 10);  //argentina
  circle(290, 260, 10);  //bolivia
  circle(390, 230, 10);  //Brasil
  circle(305, 288, 10);  //paraguai
  circle(320, 335, 10);  //uruguai
  circle(255, 180, 10);  //colombia
  
  if(mouseX>147 && mouseX< 147+15 && mouseY>93 && mouseY<93+15){
      image(brasil,20,250, 100, 100);
  }
//  if(mouseX>120 && mouseX< 120+15 && mouseY>95 && mouseY<95+15){
//      image(americadonorte,130,150, 100, 100);
//  }
//  if(mouseX>293 && mouseX< 293+15 && mouseY>167 && mouseY<167+15){
//      image(europa,180,140, 100, 100);
 // }
 // if(mouseX>253 && mouseX< 253+15 && mouseY>323 && mouseY<323+15){
 //     image(africa,280,280, 100, 100);
 // }
 // if(mouseX>427 && mouseX< 427+15 && mouseY>317 && mouseY<317+15){
  //    image(oceania,305,290, 100, 100);
 // }
//  if(mouseX>373 && mouseX< 373+15 && mouseY>207 && mouseY<207+15){
 //     image(asia,395,190, 100, 100);
//  }
}
