const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var cor;
var bola, verde, azul, vermeia;
var pino, pinoImg;
var chao;

var rand;

function preload() {
  verde = loadImage("images/bolinha verde.png");
  vermeia = loadImage("images/bolinha vermeia.png");
  azul = loadImage("images/bolinha azul.png");
  pinoImg = loadImage("images/pininho.png");
}

function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;

  rand = [verde, vermeia, azul];
  cor = random(rand);

  chao = Bodies.rectangle(400, 390, 800, 20, { isStatic: true });
  World.add(world, chao);
  rectMode(CENTER);

  bola = Bodies.circle(50, 380, 24, { isStatic: false, restitution: 0 });
  World.add(world, bola);
  imageMode(CENTER);

  pino = Bodies.rectangle(500, 350, 30, 100, {
    isStatic: false,
    restitution: 0.5,
  });
  World.add(world, pino);

  pino2 = Bodies.rectangle(545, 350, 30, 100, {
    isStatic: false,
    restitution: 0.5,
  });
  World.add(world, pino2);

  pino3 = Bodies.rectangle(520, 200, 30, 100, {
    isStatic: false,
    restitution: 0.5,
  });
  World.add(world, pino3);
}

function draw() {
  background("black");
  Engine.update(engine);

  noStroke;
  rect(chao.position.x, chao.position.y, 800, 20);
  push();
  translate(bola.position.x, bola.position.y);
  rotate(bola.angle);
  imageMode(CENTER);
  image(cor, 0, 0, 70, 70);
  pop();

  push();
  translate(pino.position.x, pino.position.y);
  rotate(pino.angle);
  imageMode(CENTER);
  image(pinoImg, 0, 0, 38, 100);
  pop();

  push();
  translate(pino2.position.x, pino2.position.y);
  rotate(pino2.angle);
  imageMode(CENTER);
  image(pinoImg, 0, 0, 38, 100);
  pop();

  push();
  translate(pino3.position.x, pino3.position.y);
  rotate(pino3.angle);
  imageMode(CENTER);
  image(pinoImg, 0, 0, 38, 100);
  pop();
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.applyForce(bola, { x: 0, y: 0 }, { x: 0.08, y: 0 });
  }
}
