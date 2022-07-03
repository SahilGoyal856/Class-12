var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

// load animations and images for the ground and trex
function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png")
}

// make the canvas size 600 by 200
function setup() {
createCanvas(600, 200);

//create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
  
//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;

// create an invisible ground for the trex to collide with so the legs are below the acual ground
invisibleGround = createSprite(200, 190, 400, 10)
invisibleGround.visible = false
}

function draw() {
background(220);

// when the space button is pressed and  the trex's Y =130 or is greater than 130, jump
if (keyDown("space" )&& trex.y>=130) {
  trex.velocityY = -10;
}

// makes the trex slowly loose velocity till it comes back down to the ground.
trex.velocityY = trex.velocityY + 0.8

// reset the ground to half of the width of the canvas
if (ground.x < 0) {
  ground.x = ground.width / 2;
}

// make the trex collide with the invisible ground insted of the visible ground
trex.collide(invisibleGround);
drawSprites();
}