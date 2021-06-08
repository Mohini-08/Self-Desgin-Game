var mon1,mon2,player;
var monster1_img,monster2_img,player_img;
var score = 0;
var lives = 3;
var point1_img;

function preload(){
  monster1_img = loadImage("monster1.png");
  monster2_img = loadImage("monster2.png");
  player_img = loadImage("tomb.jpg");
  point1_img = loadImage("point1.png");
}

function setup() {
  createCanvas(1000,500);
  mon1 = createSprite(207,408,85,100);
  mon1.addImage(monster1_img);
  mon1.scale = 0.1;

  mon2 = createSprite(390,180,85,100);
  mon2.addImage(monster2_img);
  mon2.scale = 0.3;

  player = createSprite(900,430,85,100);
  player.addImage(player_img);
  player.scale = 0.1;
  
   //vertical line
   wall1 = createSprite(30,190,20,100);
   wall1.shapeColor = "red";
   //horizontal line
   wall2 = createSprite(90,125,100,20);
   wall2.shapeColor = "red";
   wall3 = createSprite(195,125,100,20);
   wall3.shapeColor = "red";
   wall4 = createSprite(300,125,100,20);
   wall4.shapeColor = "red";
   wall5 = createSprite(405,125,100,20);
   wall5.shapeColor = "red";
   wall6 = createSprite(555,125,100,20);
   wall6.shapeColor = "red";
   wall7 = createSprite(510,125,100,20);
   wall7.shapeColor = "red";
   wall8 = createSprite(660,125,100,20);
   wall8.shapeColor = "red";
   wall9 = createSprite(766,125,100,20);  
   wall9.shapeColor = "red";
   wall10 = createSprite(870,125,100,20);
   wall10.shapeColor = "red";
  //vertical line
   wall11 = createSprite(930,190,20,100);
   wall11.shapeColor = "red";
   wall12= createSprite(30,297,20,100);
   wall12.shapeColor = "red";
   wall13 = createSprite(930,297,20,100);
   wall13.shapeColor = "red";
   wall14 = createSprite(30,402,20,100);
   wall14.shapeColor = "red";
   wall15 = createSprite(930,402,20,100);
   wall15.shapeColor = "red";
   //horizontal line
   wall16 = createSprite(90,460,100,20);
   wall16.shapeColor = "red";
   wall17 = createSprite(200,460,100,20);
   wall17.shapeColor = "red";
   wall18 = createSprite(305,460,100,20);
   wall18.shapeColor = "red";
   wall19 = createSprite(408,460,100,20);
   wall19.shapeColor = "red";
   wall20 = createSprite(512,460,100,20);
   wall20.shapeColor = "red";
   wall21 = createSprite(615,460,100,20);
   wall21.shapeColor = "red";
   wall22 = createSprite(718,460,100,20);
   wall22.shapeColor = "red";
   wall23 = createSprite(820,460,100,20);
   wall23.shapeColor = "red";
   wall24 = createSprite(898,460,40,20);
   wall24.shapeColor = "red";
   //lines
   wall25 = createSprite(250,400,20,100);
   wall25.shapeColor = "red";
   wall26 = createSprite(400,300,100,20);
   wall26.shapeColor = "red";
   wall27 = createSprite(680,280,20,100);
   wall27.shapeColor = "red";
   wall28 = createSprite(680,340,100,20);
   wall28.shapeColor = "red";

   mon1.velocityX = 1;
   mon2.velocityY = 1;
   
   edges = createEdgeSprites();
   //dot line 1
   dot1 = createSprite(860,430,10,10);
   dot1.shapeColor = "yellow";
   dot2 = createSprite(820,430,10,10);
   dot2.shapeColor = "yellow";
   dot3 = createSprite(780,430,10,10);
   dot3.shapeColor = "yellow";
   dot4 = createSprite(740,430,10,10);
   dot4.shapeColor = "yellow";
   dot5 = createSprite(700,430,10,10);
   dot5.shapeColor = "yellow";
   dot6 = createSprite(660,430,10,10);
   dot6.shapeColor = "yellow";
   dot7 = createSprite(616,430,10,10);
   dot7.shapeColor = "yellow";
   dot8 = createSprite(574,430,10,10);
   dot8.shapeColor = "yellow";
   dot9 = createSprite(530,430,10,10);
   dot9.shapeColor = "yellow";
   dot10 = createSprite(490,430,10,10);
   dot10.shapeColor = "yellow";
   dot11 = createSprite(450,430,10,10);
   dot11.shapeColor = "yellow";
   dot12 = createSprite(410,430,10,10);
   dot12.shapeColor = "yellow";
   dot13 = createSprite(370,430,10,10);
   dot13.shapeColor = "yellow";
   dot14 = createSprite(330,430,10,10);
   dot14.shapeColor = "yellow";
   dot15 = createSprite(290,430,10,10);
   dot15.shapeColor = "yellow";
  //dot line 2
   dot16 = createSprite(290,399,10,10);
   dot16.shapeColor = "yellow";
   dot17 = createSprite(290,366,10,10);
   dot17.shapeColor = "yellow";
   // dot line 3
   dot18 = createSprite(220,430,10,10);
   dot18.shapeColor = "yellow";
   dot19 = createSprite(220,400,10,10);
   dot19.shapeColor = "yellow";
   dot20 = createSprite(220,370,10,10);
   dot20.shapeColor = "yellow";
   dot21 = createSprite(60,370,10,10);
   dot21.shapeColor = "yellow";
   dot22 = createSprite(60,400,10,10);
   dot22.shapeColor = "yellow";
   dot23 = createSprite(60,430,10,10);
   dot23.shapeColor = "yellow";
   //dot line 4
   dot24 = createSprite(390,160,10,10);
   dot24.shapeColor = "yellow";
   dot25 = createSprite(390,280,10,10);
   dot25.shapeColor = "yellow";
   //dot line 5
   dot26 = createSprite(680,360,10,10);
   dot26.shapeColor = "yellow";
   dot27 = createSprite(650,360,10,10);
   dot27.shapeColor = "yellow";
   dot28 = createSprite(710,360,10,10);
   dot28.shapeColor = "yellow";
   dot29 = createSprite(655,310,10,10);
   dot29.shapeColor = "yellow";
   dot30 = createSprite(710,310,10,10);
   dot30.shapeColor = "yellow";
   dot31 = createSprite(710,280,10,10);
   dot31.shapeColor = "yellow";
   dot32 = createSprite(710,250,10,10);
   dot32.shapeColor = "yellow";
   dot33 = createSprite(655,280,10,10);
   dot33.shapeColor = "yellow";
   dot34 = createSprite(655,250,10,10);
   dot34.shapeColor = "yellow";
}

function draw() {
  background("black");
  textSize(20);
  text("SCORE: " + score,860,20);
  

  if(keyDown(UP_ARROW)){
    player.y -= 2;
  }
  if(keyDown(DOWN_ARROW)){
    player.y += 2;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x += 2;
  }
  if(keyDown(LEFT_ARROW)){
    player.x -= 2;
  }
//touches the monster,disaapear
if(player.isTouching(mon1) || player.isTouching(mon2)){
  player.visible = false;
}
  mon2.bounceOff(wall5);
  mon2.bounceOff(wall26);
  mon1.bounceOff(wall25);
  mon1.bounceOff(wall14);
  
 //player touuches dots
 if(player.isTouching(dot1)){
  dot1.destroy();
  score++;
  var point1 = createSprite(dot1.x,dot1.y,20,20);
  point1.addImage(point1_img);
  point1.velocityY = -2;
}

if(player.isTouching(dot2)){
  dot2.destroy();
  score++;
  var point1 = createSprite(dot2.x,dot2.y,20,20);
  point1.addImage(point1_img);
  point1.velocityY = -2;
}
if(player.isTouching(dot3)){
  dot3.destroy();
  score++;
  var point1 = createSprite(dot3.x,dot3.y,20,20);
  point1.addImage(point1_img);
  point1.velocityY = -2;
}
if(player.isTouching(dot4)){
  dot4.destroy();
  score++;
  var point1 = createSprite(dot4.x,dot4.y,20,20);
  point1.addImage(point1_img);
  point1.velocityY = -2;
}
if(player.isTouching(dot5)){
  dot5.destroy();
  score++;
  var point1 = createSprite(dot5.x,dot5.y,20,20);
  point1.addImage(point1_img);
  point1.velocityY = -2;
}
if(player.isTouching(dot6)){
  dot6.destroy();
  score++;
  var point1 = createSprite(dot6.x,dot6.y,20,20);
  point1.addImage(point1_img);
  point1.velocityY = -2;
}
if(player.isTouching(dot7)){
  dot7.destroy();
  score++;
  var point1 = createSprite(dot7.x,dot7.y,20,20);
  point1.addImage(point1_img);
  point1.velocityY = -2;
}
if(player.isTouching(dot8)){
  dot8.destroy();
  score++;
  var point1 = createSprite(dot8.x,dot8.y,20,20);
  point1.addImage(point1_img);
  point1.velocityY = -2;
}
if(player.isTouching(dot9)){
  dot9.destroy();
  score++;
  var point1 = createSprite(dot9.x,dot9.y,20,20);
  point1.addImage(point1_img);
  point1.velocityY = -2;
}
if(player.isTouching(dot10)){
  dot10.destroy();
  score++;
  var point1 = createSprite(dot10.x,dot10.y,20,20);
  point1.addImage(point1_img);
  point1.velocityY = -2;
}
if(player.isTouching(dot11)){
  dot11.destroy();
  score++;
  var point1 = createSprite(dot11.x,dot11.y,20,20);
  point1.addImage(point1_img);
  point1.velocityY = -2;
}
if(player.isTouching(dot12)){
  dot12.destroy();
  score++;
  var point1 = createSprite(dot12.x,dot12.y,20,20);
  point1.addImage(point1_img);
  point1.velocityY = -2;
}
if(player.isTouching(dot13)){
  dot13.destroy();
  score++;
  var point1 = createSprite(dot13.x,dot13.y,20,20);
  point1.addImage(point1_img);
  point1.velocityY = -2;
}
if(player.isTouching(dot14)){
  dot14.destroy();
  score++;
  var point1 = createSprite(dot14.x,dot14.y,20,20);
  point1.addImage(point1_img);
  point1.velocityY = -2;
}
if(player.isTouching(dot15)){
  dot15.destroy();
  score++;
  var point1 = createSprite(dot15.x,dot15.y,20,20);
  point1.addImage(point1_img);
  point1.velocityY = -2;
}

  drawSprites()
}