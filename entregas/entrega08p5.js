//https://editor.p5js.org/fernandoppp/sketches/DLDKGfUiY


let margenIzq;
let margenDer;
let gelp;
let posX;
let posY;
let dirX;
let dirY;
let colores;
let meandwho;
let margenAbajo;
let margenArriba;

function setup() {
  createCanvas(700, 600);
  guarensillo=loadImage("./guarensito lindo.png");
  guarensigarro=loadImage("./guarensigarro.jpeg");
  posX=0; //width/2;
  posY=0; //height/2;
  dirX = 2;
  dirY = 2;
  colores=color(255,200,4)
  //frameRate(60);
}

function draw() {
  background(colores);
  fondo();
  margenes();
  laoaLao();
  parribaPabajo();
  imagen();
   // tamx=tamx+1*agrandao;
//ellipse(100, 100, tamx, tamy)
  
  //if (tamx>100){agrandao=agrandao*-1};
  

}

// funciones

function margenes(){
  // def ubicacion de los márgenes
  margenIzq=width*1/5; //120
  margenDer=width*4/5; //480
  margenAbajo=height*4/5; //560
  margenArriba=height*1/5; //140
  // line(x1,y1, x2,y2) /// x1,y1 punto de origen de la línea x2,y2 punto de destino
  line(margenIzq,0, margenIzq,height); 
  line(margenDer,0, margenDer,height);
  //
  line(0,margenArriba, width,margenArriba);
  line(0,margenAbajo, width,margenAbajo);
}

function laoaLao(){ //la imagen se desplaza horizontalmente
  if(posX>margenDer-100){ //width*4/5){
    //dirX=-2;
    dirX=random(-0.1, -7);
    colors();
  }
  if(posX<margenIzq){ //width*1/5){
    //dirX=2;
    dirX=random(0.1, 7);
    colors();
  }
  posX=posX+1*dirX; // posX + (1*dirX)
}

function parribaPabajo(){ //la imagen se desplaza verticalmente
  if(posY>margenAbajo-100){ //menor que 460
    //dirY=-1;
    dirY=random(-0.1, -7);
    colors();
  }
  if(posY<margenArriba){ //mayor que 140
    //dirY=1;
    dirY=random(0.1, 7);
    colors();
  }
  posY=posY+1*dirY; // posY + (1*dirY)
}

function imagen(){
  image(guarensillo, posX,posY,100,100);
}

function colors(){
  // sintaxis-->  color(R,G,B) /// random(valor minimo, valor maximo)
  
  colores=color(random(10,255),random(10,255),random(10,255));
}

function fondo(){ //pushpop porque sino me centra la otra img
  push()
    imageMode(CENTER)
    image(guarensigarro, width/2, height/2, 300,300); // guae=guaren.jpeg (declarado en la funcion setup)
  pop();
}










