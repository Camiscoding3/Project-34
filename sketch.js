
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground , wall1 , wall2;
var block1 , brick ,blockGroup;
var bricks = [];
var score = 0;
var bg , ball;


function preload () {
 
}


function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;



  ground = new Ground (10 , 599 , 2500 , 10);
  wall1 = new Ground (10 , 599 , 10 , height*2);
  wall2 = new Ground (1200 , 599 , 20 , height*2);

block1 = Bodies.rectangle(600,595,200,30 );
World.add(world , block1);







  rectMode(CENTER);
}


function draw() 
{
  background(0);
  Engine.update(engine);

  ground.show();
  wall1.show();
  wall2.show();
keyPressed();

if(keyIsDown("LEFT_ARROW")){
  brick.x = brick.x -3;
    } else if(keyIsDown("")){
      brick.x = brick.x + 3;
    }

   /* if(collide(ground , ball)==true)
    {
      fill(241, 175, 223);
    text("GAME OVER YOU LOSE",200,200);
    brick.visible = false;
    ball.visible = false;
    }*/

}


function keyPressed() {
  if (keyCode === ENTER) {
    brick = new Brick(600,400,200,30);
    brick.show();
    brick.isStatic = false;
    var ball_options = {
      density : 0.007
    } 
    ball = Bodies.circle(300 , 300 , 15 , ball_options);
    World.add(world , ball);
  }

  }

function spawnBrick(){
if(block1.velocity = 0)
  brick = new Brick (block1.position.x , block1.position.y + 30 , 66 , 30);
  brick.velocity = block1.velocity + 0.2;
  bricks.push(brick);


}