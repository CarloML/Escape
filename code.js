var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b046a24c-26a4-4e58-bb70-d448a15e354c","e8b1fb16-5e86-45bc-bed5-faa37c83a5aa","3a51ba0a-bc75-41ba-8e66-a8634fcf9ef4"],"propsByKey":{"b046a24c-26a4-4e58-bb70-d448a15e354c":{"name":"cave","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"f6e6eGEr5gmU8r6jCbyKXKohtiY9BAhb","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/b046a24c-26a4-4e58-bb70-d448a15e354c.png"},"e8b1fb16-5e86-45bc-bed5-faa37c83a5aa":{"name":"eightball","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"wl0tkdLSb6UFSUqMuwbXgZhvBh1UjY_B","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/e8b1fb16-5e86-45bc-bed5-faa37c83a5aa.png"},"3a51ba0a-bc75-41ba-8e66-a8634fcf9ef4":{"name":"robot","sourceUrl":null,"frameSize":{"x":112,"y":143},"frameCount":2,"looping":true,"frameDelay":12,"version":"9RVS5aQYHBAz.w9.GBMgVxsaBGm4c3.G","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":224,"y":143},"rootRelativePath":"assets/3a51ba0a-bc75-41ba-8e66-a8634fcf9ef4.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gameState = "start";
var score = 0;

// primera fila de cajas
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";

//segunda fila de cajss
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";

//paleta y pelota
paddle=createSprite(200,390,100,20);
ball=createSprite(200,200,20,20);
paddle.setAnimation("robot");
ball.setAnimation("eightball");
ball.scale = 0.1
paddle.scale = 0.6




function draw() {
    
    if (gameState === "start") {
   
    background("white");
    textSize(25)
    stroke("white")
    text("PRESS ENTER TO START", 50,250);
    
    if (keyDown(ENTER)) {
    ball.velocityY = 10;
    ball.velocityX = 13;
    gameState = "play";
    }
    
    }  
    
    if (gameState == "play") {
    background("black");
    fill("white");
    textFont("Calibri");
    textSize(25);
    text("Score: " + score, 20,20);
      ball.bounceOff(topEdge)
    ball.bounceOff(leftEdge);
    ball.bounceOff(rightEdge);
    ball.bounceOff(paddle);
    paddle.x=mouseX 
    if (ball.bounceOff(box16)) {
  box16.destroy();
  score = score + 1000;
  }
  if (ball.bounceOff(box15)) {
  box15.destroy();
   score = score + 1000;
  }
  if (ball.bounceOff(box14)) {
  box14.destroy();
   score = score + 1000;
  }
  if (ball.bounceOff(box13)) {
  box13.destroy();
   score = score + 1000;
  }
  if (ball.bounceOff(box12)) {
  box12.destroy();
   score = score + 1000;
  } 
  if (ball.bounceOff(box11)) {
  box11.destroy();
   score = score + 1000;
  }
  if (ball.bounceOff(box10)) {
  box10.destroy();
   score = score + 1000;
  }
  if (ball.bounceOff(box9)) {
  box9.destroy();
   score = score + 1000;
  }
  if (ball.bounceOff(box8)) {
  box8.destroy();
   score = score + 1000;
  }
  if (ball.bounceOff(box7)) {
  box7.destroy();
   score = score + 1000;
  }
  if (ball.bounceOff(box6)) {
  box6.destroy();
   score = score + 1000;
  }
  if (ball.bounceOff(box5)) {
  box5.destroy();
   score = score + 1000;
  }
  if (ball.bounceOff(box4)) {
  box4.destroy();
   score = score + 1000;
  }
  if (ball.bounceOff(box3)) {
  box3.destroy();
   score = score + 1000;
  }
  if (ball.bounceOff(box2)) {
  box2.destroy();
   score = score + 1000 ;
  }
  if (ball.bounceOff(box1)) {
  box1.destroy();
   score = score + 1000 ;
  }
   drawSprites();
    if (ball.isTouching(bottomEdge)) {
      gameState = "lose";
    
    }
    
    
    
   }
    
    if (gameState === "lose") {
    background("red");
     
     
    }
    
  createEdgeSprites();
  reset();
  destroy();
}




function bounce(){
  ball.bounceOff(topEdge)
  ball.bounceOff(leftEdge);
  ball.bounceOff(rightEdge);
  }
function teclado(){
  if (keyDown(ENTER)) {
  ball.velocityY = 10;
  ball.velocityX = 13;
  }
}
function reset(){
if (ball.isTouching(bottomEdge)) {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
  }
}
function bouncePaddle(){
  ball.bounceOff(paddle);

}


function destroy(){
  if (ball.bounceOff(box16)) {
  box16.destroy();
  score = score + 1000
  }
  if (ball.bounceOff(box15)) {
  box15.destroy();
   score = score + 1000
  }
  if (ball.bounceOff(box14)) {
  box14.destroy();
   score = score + 1000
  }
  if (ball.bounceOff(box13)) {
  box13.destroy();
   score = score + 1000
  }
  if (ball.bounceOff(box12)) {
  box12.destroy();
   score = score + 1000
  } 
  if (ball.bounceOff(box11)) {
  box11.destroy();
   score = score + 1000
  }
  if (ball.bounceOff(box10)) {
  box10.destroy();
   score = score + 1000
  }
  if (ball.bounceOff(box9)) {
  box9.destroy();
   score = score + 1000
  }
  if (ball.bounceOff(box8)) {
  box8.destroy();
   score = score + 1000
  }
  if (ball.bounceOff(box7)) {
  box7.destroy();
   score = score + 1000
  }
  if (ball.bounceOff(box6)) {
  box6.destroy();
   score = score + 1000
  }
  if (ball.bounceOff(box5)) {
  box5.destroy();
   score = score + 1000
  }
  if (ball.bounceOff(box4)) {
  box4.destroy();
   score = score + 1000
  }
  if (ball.bounceOff(box3)) {
  box3.destroy();
   score = score + 1000
  }
  if (ball.bounceOff(box2)) {
  box2.destroy();
   score = score + 1000 
  }
  if (ball.bounceOff(box1)) {
  box1.destroy();
   score = score + 1000 
  }
 
  }



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
