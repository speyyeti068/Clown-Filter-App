var xCord = "0";
var yCord = "0";

function preload(){
    picture = loadImage("https://i.postimg.cc/tgTS2RFg/clownnose.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();
    
    poseNet = ml5.poseNet(video,() => {
        console.log("Model Loaded");
    });

    poseNet.on("pose",(results) => {
        if(results.length > 0){
            console.log(results);

            xCord = results[0].pose.nose.x;
            yCord = results[0].pose.nose.y;

            console.log("Nose X = " + xCord);
            console.log("Nose Y = " + yCord);
        }
    });
}

function draw(){
    image(video,0,0,400,300);

    fill(255,0,0);
    stroke(255,0,0);
    image(picture,xCord - 17,yCord - 15,35,35);
}

function takeSnapshot(){
    save("filter.png");
}