const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;
var box1,box2,ground1;
var canvas;
function setup(){
canvas = createCanvas(400,400);
engine = Engine.create();
world = engine.world;

box1 = new Box(200,200,40,40);
box2 = new Box(210,100,40,70);

ground1 = new Ground(200,380,400,30);

}

function draw(){
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display();
  ground1.display();
}