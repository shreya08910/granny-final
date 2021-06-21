var select1;
var select2;
var select3;
var crowbar;
var pliers;
var dhand;
var hwheel;
var padkey;
var stung;


function preload(){
  mainScreen = loadImage("Images/house1.jpg")
  lastImg = loadImage("Images/last wrd.png")
  treeImg = loadImage("Images/bg.jpeg")
  playerimg = loadImage("Images/boy.png")
  wallImg = loadImage("Images/wall.jpg")
  granImg= loadImage("Images/granny.png")
  granpImg= loadImage("Images/grnpa.png")
  doorImg= loadImage("Images/doorg.png")
  crImg= loadImage("Images/crowbar.png")
  plImg= loadImage("Images/pliers.png")
  dhandImg= loadImage("Images/door handle.png")
  hwheelImg= loadImage("Images/hand wheel.png")
  padkeyImg= loadImage("Images/padlock key.png")
  stungImg= loadImage("Images/stun gun.png")


}

function setup(){
  createCanvas(displayWidth-75,displayHeight-150)
  house = createSprite(width/2,height/2);
  house.addImage(mainScreen);
  house.scale = 1.0;

  lastWords = createSprite(width/2 ,height/2,300,300);
  //animations
  lastWords.addImage(lastImg);
  lastWords.scale =1;

  tree = createSprite(width/2,height/2,width,height);
  tree.addImage(treeImg);
  tree.scale = 1.7

  gameState = "WAIT";

  select1 = createSprite(width/2-50,height-300,50,50);
  select1.shapeColor = "red"

  select2 = createSprite(width/2,height-300,50,50);
  select2.shapeColor = "green"

  select3 = createSprite(width/2+50,height-300,50,50);
  select3.shapeColor = "yellow"


  lastWords.visible = false;
  house.visible = false;
  select1.visible = false;
  select2.visible = false;
  select3.visible = false;
  tree.visible = false;


 
  player = createSprite(150,height-100)
  player.visible = false
  player.addImage(playerimg)
  player.scale=0.04


  grandma = createSprite(width-50,50,50,50)
  grandma.visible = false
  grandma.shapeColor = "red"
  grandma.addImage(granImg)
  grandma.scale=0.3

  grandpa = createSprite(width-50,height-50,50,50)
  grandpa.visible = false
  grandpa.shapeColor = "red"
  grandpa.addImage(granpImg)
  grandpa.scale=0.3

  door= createSprite(width-50,height/2)
  door.visible= false
  door.addImage(doorImg)
  door.scale=0.1

  crowbar= createSprite(40,165)
  crowbar.visible=false
  crowbar.shapeColor="green"
  crowbar.addImage(crImg)
  crowbar.scale=0.3

  pliers= createSprite(550,170)
  pliers.shapeColor="green"
  pliers.addImage(plImg)
  pliers.scale=0.2

  dhand= createSprite(1250,170)
  dhand.shapeColor="green"
  dhand.addImage(dhandImg)
  dhand.scale=0.2

  hwheel= createSprite(550,585)
  hwheel.shapeColor="green"
  hwheel.addImage(hwheelImg)
  hwheel.scale=0.2

  padkey= createSprite(1250,450)
  padkey.shapeColor="green"
  padkey.addImage(padkeyImg)
  padkey.scale=0.2


  stung= createSprite(40,585)
  stung.shapeColor="green"
  stung.addImage(stungImg)
  stung.scale=0.1



 
  edges = createEdgeSprites()
}


function draw(){
  
  if(gameState === "WAIT"){
    lastWords.visible = true;
    house.visible = true;50,5
    select1.visible = true;
    select2.visible = true;
    select3.visible = true;
    pliers.visible= false;
    dhand.visible= false;
    hwheel.visible= false;
    padkey.visible= false;
    stung.visible= false;
    
  }

  if(mousePressedOver(select1)){
    gameState = "door";
  }
  if(mousePressedOver(select2)){
    gameState = "boat";
  }
  if(mousePressedOver(select3)){
    gameState = "heli";
  }
  
  if(gameState === "door"){
    lastWords.visible = false;
    house.visible = false;
    select1.visible = false;
    select2.visible = false;
    select3.visible = false;
    tree.visible = true;
    door.visible=true;
    crowbar.visible=true
    pliers.visible=true
    dhand.visible=true
    hwheel.visible=true
    padkey.visible=true
    stung.visible=true
    
    player.visible = true  
    //player.bounceOff(edges)
    grandma.visible = true
    grandpa.visible = true
    grandma.bounceOff(edges)
   
   // grandma.velocityY = random(2,5)
    if(keyDown("up")){
      player.y = player.y - 5
      player.velocityX = 0 
    }
    if(keyDown("right")){
      player.x = player.x + 5
    }
    
    var wall1 = createSprite(3,50,5,300);
     wall1.shapeColor="brown"
    
    
    var wall2 = createSprite(100,200,200,5);
    wall2.shapeColor="brown"
        
    
    var wall3 = createSprite(200,165,5,75);
    wall3.shapeColor="brown"
    
    
    var wall4 = createSprite(500,100,5,200);
    wall4.shapeColor="brown"

    var wall5 = createSprite(572,200,150,5);
    wall5.shapeColor="brown"
    
      
    var wall6 = createSprite(645,165,5,75);
    wall6.shapeColor="brown"
    
   
    var wall7 = createSprite(1190,200,200,5);
    wall7.shapeColor="brown"
    
      
    var wall8 = createSprite(1190,3,200,5);
    wall8.shapeColor="brown"
  
    var wall9 = createSprite(1287,100,5,200);
    wall9.shapeColor="brown"
    
    var wall10 = createSprite(3,512,5,200);
    wall10.shapeColor="brown"
    
    var wall11 = createSprite(100,410,200,5);
    wall11.shapeColor="brown"
    
    var wall12 = createSprite(100,615,200,5);
    wall12.shapeColor="brown"
    
    var wall13 = createSprite(500,512,5,200);
    wall13.shapeColor="brown"

    var wall14 = createSprite(598,615,200,5);
    wall14.shapeColor="brown"
  
    var wall15 = createSprite(700,516,5,200);
    wall15.shapeColor="brown"
 
    var wall16 = createSprite(1287,515,5,200);
    wall16.shapeColor="brown"
   
    var wall18 = createSprite(1190,418,200,5);
    wall18.shapeColor="brown"
     
    var wall19 = createSprite(1190,615,200,5);
    wall19.shapeColor="brown"
   /*    
    var wall20 = createSprite(350,250,100,5);
    wall20.shapeColor="brown"
    */
 
    
    grandma.velocityX = -3 
    
  }
  
  drawSprites();
  
}













