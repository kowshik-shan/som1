
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object,ground;
var bob;

function setup(){
createCanvas(500,500);
background("black");
engine = Engine.create()
ground = Bodies.rectangle(250,465,500,10,{isStatic: true})

bob = new Box()



World.add(engine.world,ground)
console.log(ground);
}
function draw(){
   background("white");
    Engine.update(engine);

    bob.display()
    
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,500,10);

}