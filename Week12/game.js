
var characterX = 100;
var characterY = 100;

var left = 37; 
var up = 38;
var right = 39;
var down = 40;


var shapeX = 400;
var shapeY = 0;
var angleX2 =400
var angleY2 = 0
var angleX3 = 400
var angleY3 = 0
var shapeXSpeed;
var shapeYSpeed;


var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(800, 600);
    createCharacter(400,550);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

}

function draw()
{
    background("grey");
    stroke(0);
    fill(0);

    //textSize(20);
    //text("X: " + mouseX,100,200 );
    //text("Y: " + mouseY,100,220 );

    
    
    createBorders(7);

    // exit message
    textSize(16);
    text("EXIT", width-60,height-570)

    
    drawCharacter();
    characterMovement();


    // potential enemy
    fill("red");
    // draw the shape
    square(shapeX, shapeY, 25);
    triangle(shapeX,shapeY,angleX2, angleY2, angleX3, angleY3)


     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * 20); 
     shapeYSpeed = Math.floor(Math.random() * 20); 
    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = Math.random() * width; // reset shapeX to a random x-coordinate at the top of the screen
        shapeY = 0; // reset shapeY to the top of the screen
    }
    if(shapeX < 0)
    {
        shapeX = Math.random() * width; // reset shapeX to a random x-coordinate at the top of the screen
        shapeY = 0; // reset shapeY to the top of the screen
    }
    if(shapeY > height)
    {
        shapeX = Math.random() * width; // reset shapeX to a random x-coordinate at the top of the screen
        shapeY = 0; // reset shapeY to the top of the screen
    }
    if(shapeY < 0)
    {
        shapeX = Math.random() * width; // reset shapeX to a random x-coordinate at the top of the screen
        shapeY = 0; // reset shapeY to the top of the screen
    }

    // if the character has left the exit
    if(characterX > width && characterY <= 0)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    // create the shape based on the mouse click
    fill("red");
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement()
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
function createBorders(thickness)
{
    // top border
    rect(0,0,width-100,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right border
    rect(width-thickness,0,thickness,height);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
