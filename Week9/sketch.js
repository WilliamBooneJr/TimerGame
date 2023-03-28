function setup()
{
    createCanvas(700, 700);
}

function draw()
{
    background(211,211,270);
    strokeWeight(3);

    
    fill(255, 253, 208);
    circle(350,175,150);
   
    
    
    fill(1);
    point(375,150);
    point(320,150);
    line(300,140,340,140);
    line(360,140,400,140);

   
    
    // mouth
   
    curve(320, 190, 340, 200, 360, 200, 370, 190);
    quad(330,185,340,180,370,180,380,185)
   

    // hair
  triangle(300, 120, 320, 90, 400, 110);
    
    // body
  fill(255, 253, 208);
  rect(250,250,200,100);
  rect(285,350,130,100);
  line(310,380,340,380);
  line(310,400,340,400);
  line(310,420,340,420);
  line(360,380,390,380);
  line(360,400,390,400);
  line(360,420,390,420);
  line(350,365,350,430);
  line(350,320,350,350);
  quad(450,230,650,190,580,250,450,290);
  quad(100,400,250,280,250,220,45,350);
  
    
    fill(70);
    textSize(22);
    textFont('Italic');
    text("Billy Boone as a cartoon",270,600);


}