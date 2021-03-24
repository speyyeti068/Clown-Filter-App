function preload(){

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

            var xCord = results[0].pose.nose.x;
            var yCord = results[0].pose.nose.y;

            console.log("Nose X = " + xCord);
            console.log("Nose Y = " + yCord)
        }
    });
}

function draw(){
    image(video,0,0,400,300);
}

function takeSnapshot(){
    save("filter.png");
}