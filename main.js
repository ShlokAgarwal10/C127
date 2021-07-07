harry_theme = "";
peter_theme = "";

function preload(){
harry_theme = loadSound("music.mp3");
peter_theme = loadSound("music2.mp3");
}

function setup(){
canvas = createCanvas(600,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,0,0,600,500);
}
