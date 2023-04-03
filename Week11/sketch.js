var headX = 350;
var headY = 175;
var headDirection = 1;
var headD = 1;
var headSize = 150

var eyebrowY = 140;

var bodyL = 130;

var bodyDirection = 3;

var coorX = 100
var coorY = 200

var armY1 = 400
var armY2 = 280
var armY3 = 220
var armY4 = 350

var size = 22;
var count = 0;
var sizeDirection = 0.5;
var moveDirection = 3;
var x = 270
var y = 600

var sqY = 45
var sqDirection = 3;
var sqColor = "blue"

function setup()
{
    createCanvas(700, 700);
    
}


function draw()
{
    background(211,211,270);
    strokeWeight(3);

  
    textSize(20);
    text("X: " + mouseX,coorX,coorY );
    coorX+=headDirection
    coorY-=headDirection
    if(coorX >= 210 && coorY <=90)
      {
        cooX*=-1
        coorY*=-1
      }
    text("Y: " + mouseY,100,220 );

    
    fill(210, 180, 140);
    circle(headX,headY,headSize);
    headSize+=headD
    if(headSize >=160 || headSize<=140)
    {
      headD*=-1
    }
    headX += headDirection
  if(headX >= 400 || headX <=300)
    {
      headDirection*= -1
    }
   
    
    
    fill(1);
    point(375,150);
    point(320,150);
    line(300,eyebrowY,340,eyebrowY);
    eyebrowY += headDirection
  if(eyebrowY >= 145 || eyebrowY <=125)
    {
      headDirection*= -1
    }
   
    
  
    line(360,140,400,140);

   
    
    // mouth
   
    curve(320, 190, 340, 200, 360, 200, 370, 190);
    
   

    // hair
  triangle(300, 120, 320, 90, 400, 110);
  triangle(300, 107, 320, 90, 400, 118);
  
    
    // body
  fill(210, 180, 140);
  
  rect(250,250,200,100);
  
  rect(285,350,bodyL,100);
  bodyL += headDirection
  if(headX >= 400 || headX <=300)
    {
      headDirection*= -1
    }
   
  
  line(310,380,340,380);
  line(310,400,340,400);
  line(310,420,340,420);
  line(360,380,390,380);
  line(360,400,390,400);
  line(360,420,390,420);
  line(350,365,350,430);
  line(350,320,350,350);
  
  quad(450,230,650,190,580,250,450,290);
  
  
  quad(100,armY1,250,armY2,250,armY3,45, armY4);
  armY1 += headDirection
  armY2 += headDirection
  armY3 += headDirection
  armY4 += headDirection
  if(headX >= 400 || headX <=300)
    {
      headDirection*= -1
    }

    fill(sqColor)
    rect(128,sqY,50,50)
    sqY+=sqDirection
    if (sqY > 700 || sqY < 0) 
    
    {
      
      if (sqColor == "blue") 
      {
        sqColor = "red";
      } 
      else 
      {
        sqColor = "blue";
      }
      
      sqDirection *= -1;
    }
    
   
  
    
    fill(70);
    textSize(size);
    text("Billy Boone as a cartoon", x, y);
    size += sizeDirection;
    count+=1
    if (count > 5) 
    {
    sizeDirection *= -1;
    count = 0;
    }
  

  if (x < 400 && y === 600) 
  {
  x += moveDirection;
  } 
  else if (x >= 400 && y < 700) 
  {
    y += moveDirection;
  } 
  else if (x > 270 && y >= 700) 
  {
    x -= moveDirection;
  } 
  else if (x === 270 && y > 600) 
  {
    y -= moveDirection;
  }
}