var movingRect, fixedRect;
var gameObject1, gameObject2;
var gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="black";
  movingRect.debug=true;

  fixedRect=createSprite(600, 200, 30, 30);
  fixedRect.shapeColor="purple";
  fixedRect.debug=true;

  gameObject1=createSprite(400, 500, 50, 50);
  gameObject1.velocityX=2;
  gameObject2=createSprite(1000, 500, 50, 50);
  gameObject2.velocityX=-2;
  gameObject3=createSprite(400, 300, 50, 50);
  gameObject3.velocityX=4;
  gameObject4=createSprite(1000, 300, 50, 50);
  gameObject4.velocityX=-4;
}

function draw() {
  background("teal");  
//MovingRect with mouseX and mouseY
movingRect.x=mouseX;
movingRect.y=mouseY;
 


console.log(fixedRect.x-movingRect.x);
//Calling functions
/*if (sIsTouching(gameObject1, movingRect)){
movingRect.shapeColor="red";
gameObject1.shapeColor="red";
}
else{
  movingRect.shapeColor="black";
  gameObject1.shapeColor="pink";
}
*/
//"A" beginning=ARGUMENT
sBounceOff(gameObject1, gameObject2);
sBounceOff(gameObject3, gameObject4);

if(sIsTouching(movingRect,fixedRect)){

  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}
else{
  movingRect.shapeColor="black";
  fixedRect.shapeColor="purple";
}
drawSprites();
}

