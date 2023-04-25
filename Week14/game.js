
var characterX = 100;
var characterY = 100;

var left = 37; 
var up = 38;
var right = 39;
var down = 40;

var obstacles = [];

var exitX = 700;
var exitY = 50;

var mouseShapeX;
var mouseShapeY;

var obstacleAdded = false;

var gameStarted = false;
var gameTimer = 60;

function setup()
{
    createCanvas(800, 600);
    createCharacter(400,550);
    drawBorders(7);
    createObstacles(7);
}


function draw()
{
    obstacleAdded = false;
    background("grey");
    stroke(0);
    fill(0);
    
    drawCharacter();
    moveCharacter();
    drawObstacles();
    moveObstacles();
    drawExit();
    displayWinMessage();
}
    
    
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;

}

function drawCharacter()
{
    fill("blue");
    circle(characterX,characterY,100);
}

function moveCharacter()
{
    
    if(keyIsDown(up))
    {
        characterY -= 5;   
    }
    if(keyIsDown(down))
    {
        characterY += 5;   
    }
    if(keyIsDown(left))
    {
        characterX -= 5;   
    }
    if(keyIsDown(right))
    {
        characterX += 5;   
    }
}

function createObstacles(numObstacles)
{
    for (var i = 0; i < numObstacles; i++)
    {
        var obstacle = 
        {
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * (50 - 10) + 10,
            color: color(Math.random() * 255, Math.random() * 255, Math.random() * 255),
            speedX: Math.random() * (5 - (-5)) + (-5),
            speedY: Math.random() * (5 - (-5)) + (-5)
        };
        obstacles.push(obstacle);
    }
}

function drawObstacles()
{
    for (var i = 0; i < obstacles.length; i++) 
    {
      var obstacle = obstacles[i];
      fill(obstacle.color);
      circle(obstacle.x, obstacle.y, obstacle.size);
    }
}

function moveObstacles() 
{
    for (var i = 0; i < obstacles.length; i++) 
    {
      var obstacle = obstacles[i];
      obstacle.x += obstacle.speedX;
      obstacle.y += obstacle.speedY;
      if (obstacle.x > width) 
      {
        obstacle.x = 0;
      } 
      else if (obstacle.x < 0) 
      {
        obstacle.x = width;
      }
      if (obstacle.y > height) 
      {
        obstacle.y = 0;
      } 
      else if (obstacle.y < 0) 
      {
        obstacle.y = height;
      }
    }
}

function drawBorders() 
{
    strokeWeight(4);
    stroke("black");
    line(0, 0, width - 100, 0);
    line(0, 0, 0, height);
    line(0, height, width, height);
    line(width, 0, width, height - 50);
}

function drawExit() 
{
    textSize(16);
    text("EXIT", exitX, exitY);
}

function mouseClicked() 
{
   if (!obstacleAdded) 
   { 
        var obstacle = 
        {
          x: mouseX,
          y: mouseY,
          size: random(10, 50),
          color: color(random(255), random(255), random(255)),
          speedX: random(-5, 5),
          speedY: random(-5, 5)
        };
        obstacles.push(obstacle);
        obstacleAdded = true; 
    }
}
  
function displayWinMessage() 
{
    if (characterX > width && characterY <= 50) 
    {
      fill(0);
      stroke(5);
      textSize(40);
      textAlign(CENTER);
      text("You Win!", width / 2, height / 2);
    }
}
function checkCollision()
{
  for(var i = 0; i < obstacles.length; i++)
  {
    var obstacle = obstacles[i];
    var distance = dist(characterX, characterY, obstacle.x, obstacle.y);
    if(distance < (obstacle.size/2 + 50))
    {

      return true;
    }
  }
  return false;
}

function displayTime()
{
  textSize(32);
  fill(0);
  text("Time: " + Math.floor((gameTimer - (millis() - startTime))/1000), 10, 50);
}

function displayGameOver()
{
  textSize(40);
  fill(0);
  text("Game Over", width/2, height/2);
}

function restartGame()
{
  obstacles = [];
  createObstacles(7);
  startTime = millis();
  gameOver = false;
}

function checkWin()
{
  if(millis() - startTime >= gameTimer){
    for(var i = 0; i < obstacles.length; i++){
      var obstacle = obstacles[i];
      var distance = dist(characterX, characterY, obstacle.x, obstacle.y);
      if(distance < (obstacle.size/2 + 50)){
        return false;
      }
    }
    return true;
  }
  return false;
}

  