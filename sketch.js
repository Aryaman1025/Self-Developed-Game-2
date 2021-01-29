var Player,Npc1,Npc2,Npc3,Npc4,Laptop;
var Wall1,Wall2,Wall3,Wall4,Wall5,Wall6,Wall7,Wall8,Wall9,Wall10;
var Wall11,Wall12,Wall13,Wall14,Wall15,Wall16,Wall17,Wall18,Wall19,Wall20;

function preload(){

  PlayerImg = loadImage("Images/robber-cartoon.jpg");
  Npc = loadImage("Images/Guards.jpg");

}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-200);

  //wall parallel to wall (wall2)
  Wall1 = createSprite(250, 270,20,275);
  Wall1.shapeColor="brown";

  //wall adjascent to (wall3)
  Wall2 = createSprite(100, 325,20,150);
  Wall2.shapeColor="brown";

  //wall above spawn (wall4)
  Wall3 = createSprite(10, 400,200,20);
  Wall3.shapeColor="brown";

  // spawn wall top
  Wall4 = createSprite(10, 525,265,20);
  Wall4.shapeColor="brown";

  // spawn wall right
  Wall5 = createSprite(250, 600,20,150);
  Wall5.shapeColor="brown";

  //wall adjascent to wall (wall1)
  Wall6 = createSprite(350, 397.5,200,20);
  Wall6.shapeColor="brown";

  //wall adjascent to (wall5)
  Wall7 = createSprite(350, 525,220,20);
  Wall7.shapeColor="brown";

  //wall parallel to (wall6)
  Wall8 = createSprite(465, 300,220,20);
  Wall8.shapeColor="brown";

  //wall adjacent to 
  Wall9 = createSprite(350, 220,20,180);
  Wall9.shapeColor="brown";

  //wall adjascent to
  Wall10 = createSprite(575, 540,20,300);
  Wall10.shapeColor="brown";

  //wall
  Wall11 = createSprite(462.5, 125,245,20);
  Wall11.shapeColor="brown";

  //wall
  Wall12 = createSprite(575, 250,20,100);
  Wall12.shapeColor="brown";
 
  //wall
  Wall13 = createSprite(850, 125,250,20);
  Wall13.shapeColor="brown";

  //wall
  Wall14 = createSprite(725, 250,20,110);
  Wall14.shapeColor="brown";

  //wall
  Wall15 = createSprite(850, 300,250,20);
  Wall15.shapeColor="brown";

  //
  Wall16 = createSprite(975, 212.5,20,195);
  Wall16.shapeColor="brown";

  //
  Wall17 = createSprite(100, 25,10,50);
  Wall17.shapeColor="brown";

  Wall18 = createSprite(100, 25,10,50);
  Wall18.shapeColor="brown";

  Wall19 = createSprite(100, 25,10,50);
  Wall19.shapeColor="brown";

  Wall20 = createSprite(100, 25,10,50);
  Wall20.shapeColor="brown";

  Npc1 = createSprite(200,75,25,25)
  Npc1.addImage(Npc)
  Npc1.scale = 0.50

  Npc2 = createSprite(25,460,25,25)
  Npc2.addImage(Npc)
  Npc2.scale = 0.50

  Npc3 = createSprite(650,199,25,25)
  Npc3.addImage(Npc)
  Npc3.scale = 0.50

  Npc4 = createSprite(200,75,25,25)
  Npc4.addImage(Npc)
  Npc4.scale = 0.50

  Player = createSprite(30,625,25,25);
  Player.addImage(PlayerImg);
  Player.scale = 0.25;  

}
 
function draw(){
  background("White")

  Player.velocityX = 0;
  Player.velocityY = 0;

  
  
if (keyDown("W")){
  Player.velocityY = -3
};

if (keyDown("D")){
  Player.velocityX = 3
};

if (keyDown("A")){
  Player.velocityX = -3
};

if (keyDown("S")){
  Player.velocityY = 3
};

if (Npc1.x < 250){

  Npc1.velocityX = 3
};

if (Npc1.x > 650){

  Npc1.velocityX = -3
};

if (Npc2.x < 26){

  Npc2.velocityX = 3
};

if (Npc2.x > 400){

  Npc2.velocityX = -3
};

if (Npc3.y < 200){

 Npc3.velocityY = 3
};

if (Npc3.y > 600){

  Npc3.velocityY = -3
 };


if (Player.isTouching(Npc1)){

  Player.x = 30;
  Player.y = 625;
};

if (Player.isTouching(Npc2)){

  Player.x = 30;
  Player.y = 625;
};

if (Player.isTouching(Npc3)){

  Player.x = 30;
  Player.y = 625;
};

if (Player.isTouching(Npc4)){

  Player.x = 30;
  Player.y = 625;
};

drawSprites();
  }

