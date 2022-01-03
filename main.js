status ="";

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);   
    video.hide();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";
    object_name = document.getElementById("tag").value;
}
function modelLoaded(){
    console.log("MODEL LOADED!");
    status = true;
}
function draw(){
    image(video, 0, 0, 480, 380);
}