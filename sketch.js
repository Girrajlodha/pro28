const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var dustbin1;
var paper;
var ground;


function preload() {

}

function setup() {
    createCanvas(1500, 700);


    engine = Engine.create();
    world = engine.world;




    ground = new Ground(width / 2, 660, width, 20);

    paper = new Paper(100, 600, 50);

    dustbin1 = new Dustbin(1000, 638, 150, 20);
    dustbin2 = new Dustbin(923, 605, 20, 100);
    dustbin3 = new Dustbin(1073, 605, 20, 100);
    slingshot1 = new SlingShot(paper.body, { x: 300, y: 150 });
    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background("pink");
    Engine.update(engine);

    paper.display();
    ground.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
    slingshot1.display();
}

function mouseDragged() {
    Matter.Body.setPosition(paper.body, { x: mouseX, y: mouseY });
}


function mouseReleased() {
    slingshot1.fly();
}