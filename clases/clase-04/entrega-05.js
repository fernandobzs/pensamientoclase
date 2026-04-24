let posx=100;
let posy=150;
let sentido=1;
let agrandao=1;
let tamx=10;
let tamy=10;
function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  
  background(220);
 // frameCount=frameCount*agrandao
  tamx=tamx+1*agrandao;
ellipse(100, 100, tamx, tamy)
  //if(agrandao>200){agrandao=-1}
  
  if (tamx>100){agrandao=agrandao*-1};
//pos x, pos y , ancho y alto
  
 textAlign(CENTER, CENTER);
textSize(40);
frameRate(20)
text(frameCount, 100, 100);
push()
translate(posx,posy);
noFill()
ellipse(0,0,50,50)
pop()


  posx=posx+5*sentido;
  
  if(posx>width){sentido=-1}
if(posx<0){sentido=1}

}

