const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    //box1 is a new object of the class Box | new = new object
    box1 = new Box(200, 300, 50, 50);
    box2 = new Box(240, 100, 50, 100);
    ground = new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
 
    box1.display();
    box2.display();
    ground.display();
}

/*
OBJECT ORIENTED PROGRAMMING (OOP)
- Components of the code is compared to real world objects
- Objects:
    1. Properties
    2. Functions
Step 1: Creating a design/blueprint - class
Step 2: Creating object from that class
Step 3: Using its functions
*/