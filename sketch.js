const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polyimg,polygon;
var score = 0;
var backgroundImg;

function preload(){
  polyimg = loadImage("polygon.png");
  getbgImg();
}

function setup() {


  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(400,390,800,10);

 stand1 = new Ground(390,250,200,10);
 stand2 = new Ground(650,150,150,10);

 block1= new Box(640,110,30,40);
 block2 = new Box(670,110,30,40);
 block3= new Box(700,110,30,40);

 block4= new Box(650,70,30,40);
 block5 = new Box(680,70,30,40);
 block7 = new Box(610,110,30,40);
 block6= new Box(660,30,30,40);

 block8 = new Box(330,235,30,40);
 block9 = new Box(360,235,30,40);
 block10 = new Box(390,235,30,40);
 block11 = new Box(420,235,30,40);
 block12= new Box(450,235,30,40);

  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15= new Box(420,195,30,40);

  block16 = new Box(390,155,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon, {x:100, y:200});
}

function draw() {
  
  
 /* textSize(30);
  fill("black");
  text("Score: " + score,700,100);*/

  if(backgroundImg)
  
  background(backgroundImg); 
  Engine.update(engine);

   ground.display();
   stand1.display();
   stand2.display();
   
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   block16.display();

   
   block1.display();
   block2.display();
   block3.display();

   block4.display();
   block5.display();
   block6.display();
   block7.display();


block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();


block1.score();
block2.score();
block3.score();

block4.score();
block5.score();
block6.score();
block7.score();

     imageMode(CENTER);
    image(polyimg, polygon.position.x, polygon.position.y, 40, 40);

   slingshot.display();

   getbgImg();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
async function getbgImg(){
  //request the API call using fetch() inside a vble called response
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  
  //to store the JSON values of the response variable inside the responseJSON variable
  var responseJSON = await response.json()
  
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour >= 06 && hour <=19 ){
      bg = "bg1.png"
  }
  else{
    bg = "bg2.png"
  }
  backgroundImg = loadImage(bg);
  console.log(hour);
  }
