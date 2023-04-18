
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

function setup()
{
    createCanvas(800, 600);
    createCharacter(400,550);
    drawBorders(7);
    createObstacles(4);
}

function draw()
{
    background("grey");
    stroke(0);
    fill(0);
    
    drawCharacter();
    moveCharacter();
    drawObstacles();
    moveObstacles();
    drawExit();
    displayWinMessage();
    mouseClicked();
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
        characterY -= 10;   
    }
    if(keyIsDown(down))
    {
        characterY += 10;   
    }
    if(keyIsDown(left))
    {
        characterX -= 10;   
    }
    if(keyIsDown(right))
    {
        characterX += 10;   
    }
}

function createObstacles(numObstacles)
{
    for (var i = 0; i < numObstacles; i++)
    {
        var obstacle = 
        {
          x: Math.random(width),
          y: Math.random(height),
          size: Math.random(10, 50),
          color: color(Math.random(255), Math.random(255), Math.random(255)),
          speedX: Math.random(-5, 5),
          speedY: Math.random(-5, 5)
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
  