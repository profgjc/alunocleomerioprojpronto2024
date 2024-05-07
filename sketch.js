let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  
  createCanvas(400, 400);
  background("green");
  cor = color(random(85, 99), random(100, 200));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  
  if(mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 1;}
  
  if(mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal + 1;}

  if(mouseY < posicaoVertical) {
    posicaoVertical--;}
  
  if(mouseY > posicaoVertical) {
    posicaoVertical++;}
  
}