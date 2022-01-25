function setup(){
    canvas=createCanvas(600, 500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on("pose ", gotPoses);
}
song1="";
song2="";
function draw(){
image(video, 0,0,600,500);
}

function preload(){
        song1= loadSound("music.mp3");
song2=loadSound("music2.mp3");
}

function platsong(){
    song1.play();
    song.setVoloume(1);
    song.rate(1);
}

function modelLoaded(){
    console.log("Model has been loaded");

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}