var rect1,rect2;
function setup() {
  createCanvas(800,800);
  fixedRect= createSprite(300, 400, 50, 100);
  movingRect=createSprite(700, 400, 100, 50);
  movingRect.shapeColor="green";
fixedRect.shapeColor="green";
movingRect.velocityX = -5;
fixedRect.velocityX = 5;
  fixedRect.debug=true;
  movingRect.debug=true;
}

function draw() {
  background(0); 


  //movingRect.x=mouseX;
  //movingRect.y=mouseY; 
  console.log(fixedRect.x-movingRect.x);

  console.log("width/2+width/2 ",fixedRect.width/2+movingRect.width/2);
  
  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2  && 
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2
    ){
    movingRect.velocityX=movingRect.velocityX*(-1);
    fixedRect.velocityX=fixedRect.velocityX*(-1);
  }
  if(movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2){
      movingRect.velocityY=movingRect.velocityY*(-1);
      fixedRect.velocityY=fixedRect.velocityY*(-1);
  }

  drawSprites();
}