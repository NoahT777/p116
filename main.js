stacheX = 0;
stacheY = 0;

function preload(){

    mustache = loadImage("https://i.postimg.cc/sDJW6HKP/stache-removebg-preview.png");

}

function setup(){

    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}

function modelLoaded(){

    console.log("PoseNet is Initialized");

}

function draw(){

    image(video, 0, 0, 300, 300);
    image(mustache, stacheX, stacheY, 50, 50);


}

function gotPoses(results){

    console.log(results);
    stacheX = results[0].pose.nose.x - 25;
    stacheY = results[0].pose.nose.y - 15;
    console.log("Mustache x = " + results[0].pose.nose.x);
    console.log("Mustache y = " + results[0].pose.nose.y);

}

function take_snapshot(){

    save("Mustache filter.png");

}