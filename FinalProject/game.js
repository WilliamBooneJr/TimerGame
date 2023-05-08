
var characterX = 100;
var characterY = 100;
var gameOver = false;

var left = 37; 
var up = 38;
var right = 39;
var down = 40;

var obstacles = [];

var exitX = 700;
var exitY = 50;

var frameRate = 30;

var mouseShapeX;
var mouseShapeY;


var timeLimit = 30;

var gameTimer = timeLimit;


var gameStarted = false;
var startTime;

function setup()
{
    frameRate(30);
    createCanvas(800, 600);
    createCharacter(400,550);
    drawBorders(7);
    createObstacles(7);
    startTime = millis();
    draw();
}


function draw()
{
  background("grey");
  stroke(0);
  fill(0);

    if (gameStarted) 
    {
      if (checkCollision())
    {
      gameOver = true;
    }
    else if (floor(gameTimer) <= 0 || gameOver)
    {
    // game over, display "you win" message
    if (!gameOver)
    {
      for (var i = 0; i <= 1100; i++)
      displayWinMessage();
      displayWinMessage();
      displayWinMessage();
    }
    else{
      displayGameOver();
    }
    
    location.reload();
    }
    
    // decrement the game timer
    gameTimer -= 1/30;

    fill(255);
    textSize(24);
    }


    if (!gameStarted)
    {
      gameInstructions();
      text("Click to Start Game", width / 2, height / 2);
    }

    drawCharacter();
    moveCharacter();
    drawObstacles();
    moveObstacles();
    displayTime();
}

    
    
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;

}

function drawCharacter()
{
    fill("blue");
    square(characterX,characterY,40);
}

function moveCharacter()
{
    
    if(keyIsDown(up))
    {
        characterY -= 7;   
    }
    if(keyIsDown(down))
    {
        characterY += 7;   
    }
    if(keyIsDown(left))
    {
        characterX -= 7;   
    }
    if(keyIsDown(right))
    {
        characterX += 7;   
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
            speedX: Math.floor(Math.random() * 13),
            speedY: Math.floor(Math.random() * 13),
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

  
function displayWinMessage() 
{
  
  stroke(0);
  fill(255, 215, 0);
  textSize(100);
  textAlign(CENTER);
  text("YOU WIN!", width / 2, height / 2);
  fill(255, 215, 0);
}
function checkCollision()
{
  for(var i = 0; i < obstacles.length; i++)
  {
    var obstacle = obstacles[i];
    var distance = dist(characterX, characterY, obstacle.x, obstacle.y);
    if(distance < (obstacle.size))
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
  text("Time: " + floor(gameTimer), 10, 50);
}

function displayGameOver()
{
  textSize(40);
  fill(0);
  text("Game Over", width/2, height/2);
}


function mouseClicked() 
{
  if (!gameStarted) 
  {
    gameStarted = true;
    gameTimer = timeLimit; // reset the timer
  }
}
function gameInstructions()
{
  textSize(25);
  fill(0);
  strokeWeight(2);
  text("-Dodge all obstacles for 30s to win-", width/3, height/3);


}