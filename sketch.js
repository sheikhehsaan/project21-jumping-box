var canvas;
var musica,  musicb,  musicc,  musicd;
var one, two , three, four;
var a, b , c, d;
var ball;


function preload(){
    
    musica = loadSound("musica.mp3");
    musicb = loadSound("musicb.mp3");
    musicc = loadSound("musicc.mp3");
    musicd = loadSound("musicd.mp3");

}


function setup(){
    canvas = createCanvas(600,600);


    //create 4 different surfaces
    one = createSprite(65,580,160,5);
    one.shapeColor = 'Blue';
    two = createSprite(215,580,160,5);
    two.shapeColor = 'Orange';    
  three = createSprite(370,580,160,5);
    three.shapeColor = 'Red';
   four = createSprite(525,580,160,5);
    four.shapeColor = 'Green';

    a = createSprite(0,300,5,700);
    a.shapeColor = 'black';
    b = createSprite(600,300,5,760);
    b.shapeColor = 'black';    
    c = createSprite(300,0,700,5);
    c.shapeColor = 'black';
    d = createSprite(300,600,700,5);
    d.shapeColor = 'black';

    //create box sprite and give velocity

    ball = createSprite(random(10,590),random(10,530),20,20);
    ball.velocityX = random(-10,10);
    ball.velocityY = random(-10,10);
    ball.shapeColor = 'lavender';

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();

    if (one.isTouching(ball)) {
        ball.shapeColor = 'blue';
        musica.play();
        musicb.stop();
        musicc.stop();
        musicd.stop();
}

else if (two.isTouching(ball)) {
        ball.shapeColor = 'orange';
        musica.stop();
        musicb.play();
        musicc.stop();
        musicd.stop();
} 

else if (three.isTouching(ball)) {
           ball.shapeColor = 'red';
           musica.stop();
           musicb.stop();
           musicc.play();
           musicd.stop();
}
else if (four.isTouching(ball)) {
           ball.shapeColor = 'green';
           musica.stop();
           musicb.stop();
           musicc.stop();
           musicd.play();
}

    ball.bounceOff(one);
    ball.bounceOff(two);
    ball.bounceOff(three);
    ball.bounceOff(four);

    ball.bounceOff(a);
    ball.bounceOff(b);
    ball.bounceOff(c);
    ball.bounceOff(d);
    

    drawSprites();


    


    
}
