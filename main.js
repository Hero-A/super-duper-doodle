function preload(){

}

function setup(){
    canvas = createCanvas(300, 230);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 230);
    video.hide();
}

function draw(){
    image(video, 0, 0, 300, 230)
}

function take_snapshot(){
    save('my photo.jpeg');
}

function take_snapshot(){
    save('my photo.jpg');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}