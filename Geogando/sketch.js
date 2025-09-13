// http://colabeduc.org/descricao/show/1061
// https://youtu.be/huhyXDk3KF0

let globe;
var tela = 0
var abertura;
var slider;

function preload(){
  soundFormats('mp3');
  globe = loadImage('imagens/globe-5.gif');
  mapa = loadImage('imagens/americalatina.jpg');
  home = loadImage('imagens/home2.jpg');
  config = loadImage('imagens/config.gif');
  play = loadImage('imagens/play.gif');
  credito = loadImage('imagens/credito.gif');
//  recursonatural = loadImage('imagens/recursonatural.jpg');
 // uruguai = loadImage('imagens/uruguai.jpg');
//  argentina = loadImage('imagens/argentina.jpg');
 // paraguai = loadImage('imagens/paraguai.jpg');
 // bolivia = loadImage('imagens/bolivia.jpg');
 // peru = loadImage('imagens/peru.jpg');
 // brasil = loadImage('imagens/brasil.jpg');
 // colombia = loadImage('imagens/colombia.jpg');
 // venezuela = loadImage('imagens/venezuela.jpg');
 // mexico = loadImage('imagens/mexico.jpg');
  abertura = loadSound("musicas/2001.mp3");
  onda = loadImage('imagens/onda.gif');
  Creditos = loadImage('imagens/Créditos.png');
  
  
}

function setup() {
  createCanvas(500, 400);
  slider = createSlider(0, 0.8, 0.3, 0.01);
  abertura.loop();
  
  
}

function draw() {
  background(0);
  abertura.setVolume(slider.value());
  
  if(tela==0){
    menu(); 
    
    if(mouseX>310 && mouseX< 310+130 && mouseY>190 && mouseY<190+35){
      image(play,448,190, 40, 40);
    }
    if(mouseX>310 && mouseX< 310+130 && mouseY>235 && mouseY<235+35){
      image(config,450,233, 45, 45);
    }
    if(mouseX>310 && mouseX< 310+130 && mouseY>275 && mouseY<275+35){
      image(credito,450,285, 34, 34);
    }
  }
  if(tela==1){
    iniciar();
 }
  if(tela==2){
    opcoes();
  }  
  if(tela==3){
    creditos();
  }
  if(tela==4){
    sair();
  }
}


function mouseClicked(){
  
  if(mouseX>310 && mouseX< 310+130 && mouseY>190 && mouseY<190+35){
    console.log("ok");
    tela=1;
  }
  if(mouseX>310 && mouseX< 310+130 && mouseY>235 && mouseY<235+35){
    console.log("ok");
    tela=2
  }
  if(mouseX>310 && mouseX< 310+130 && mouseY>280 && mouseY<280+35){
    console.log("ok");
    tela=3
  }
  if(mouseX>310 && mouseX< 310+130 && mouseY>325 && mouseY<325+35){
    console.log("ok");
    tela=4
  }
  if(mouseX>450 && mouseX< 450+40 && mouseY>20 && mouseY<20+40){
    console.log("ok");
    tela=0;
  }
}  
