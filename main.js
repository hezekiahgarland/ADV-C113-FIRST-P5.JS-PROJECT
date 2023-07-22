
function preload() {

}

function setup() {
    canvas = createCanvas(600, 550);
    canvas.position(100, 300);
video=createCapture(VIDEO);
video.hide();    
}

function draw() {
    image(video,250,225,100,100);
    fill("green");
    stroke("black");
    rect(50,50,30,450);
    rect(550,50,30,450);
    rect(50,50,500,30);
    rect(50,470,500,30);
    fill("red");
    stroke("black");
circle(50,50,100);
circle(550,50,100);
circle(50,470,100);
circle(550,470,100);

}

function take_pic() {
save("mypic.png")
}

