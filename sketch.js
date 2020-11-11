var tower,towerImage 
var climber,climberImage,climbersgroup
var door,doorImage,doorsgroup
var ghost,ghostImage
var invisibleblock,invisibleblockgroup
var gamestate="play"
function preload(){
  towerImage=loadImage("tower.png");
  climberImage=loadImage("climber.png")
  doorImage=loadImage("door.png")
  ghostImage=loadImage("ghost-standing.png")
  
  
  
  
  
}
function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage("tower",towerImage)
  tower.velocityY=1;    
  invisibleblockgroup=new Group();
  
  doorsgroup=new Group();
  
  climbersgroup=new Group();
  
  ghost=createSprite(200,200,50,50);
  ghost.scale=0.3;
  ghost.addImage("ghost",ghostImage)
  
}
function draw(){
  background("black");
  if(gamestate==="play"){
 
   
    
    
  if(tower.y>400){
     tower.y=300
    }
  if(keyDown("left_arrow")){
  ghost.x=ghost.x-3   
     
     
     
     }
  if(invisibleblockgroup.isTouching(ghost ) || ghost.y>600){
  ghost.destroy()  
  gamestate="end";   
     
     }
  
   if(keyDown("right_arrow")){
  ghost.x=ghost.x+3   
     
     
     
     }
   if(keyDown("space")){
  ghost.velocityY=-5
     
     
     
     
     }
  if(climbersgroup.isTouching(ghost)){
  ghost.velocityY=0;
    }
  ghost.velocityY=ghost.velocityY+0.8
  spawndoors()
  
 drawSprites();
 }
  if(gamestate==="end"){
  stroke("yellow")   
  fill("yellow")
  textSize(30)
  text("gameover",250,250)  
     }
 }
function spawndoors(){
  if(frameCount%240===0){
  var door=createSprite(200,-50)
  door.addImage(doorImage)
  door.velocityY=1;
  door.x=Math.round(random(120,400)) 
  door.lifetime=700;
    
  var climber=createSprite(200,10)
  climber.addImage(climberImage)
  climber.velocityY=1;
  climber.x=door.x;
  climber.lifetime=700;
  climbersgroup.add(climber)  
  doorsgroup.add(door)  
   
  ghost.depth=door.depth
  ghost.depth=ghost.depth+1
  
  invisibleblock=createSprite(200,15);
  invisibleblock.width=climber.width
  invisibleblock.height=2;
  invisibleblock.x=door.x;
  invisibleblock.velocityY=1
  invisibleblockgroup.add(invisibleblock)  
  }    
  
  
  
  
  
}
